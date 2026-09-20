import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8duo8bsh {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-7.808h16V8.808H4z");
}
</style><path class="h8duo8bsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:credit-card-sharp"} {...others} />);
}

export default Component;
