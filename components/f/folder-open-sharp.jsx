import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wyjewcbbi {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v2H4v10l2.4-8h17.1l-3 10z");
}
</style><path class="wyjewcbbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:folder-open-sharp"} {...others} />);
}

export default Component;
