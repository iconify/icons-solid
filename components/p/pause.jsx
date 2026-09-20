import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itwjg14iq {
  fill: currentColor;
  d: path("M14 19V5h4v14zm-8 0V5h4v14z");
}
</style><path class="itwjg14iq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pause"} {...others} />);
}

export default Component;
