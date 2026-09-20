import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.af8j7_b1l {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2h9.231v1H4v9.962l2.266-7.577h16.6L20.288 19z");
}
</style><path class="af8j7_b1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:folder-open-sharp"} {...others} />);
}

export default Component;
