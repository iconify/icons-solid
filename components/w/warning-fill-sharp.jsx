import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hlgb3ob_q {
  fill: currentColor;
  d: path("M13 14a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm-.99 3a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}
</style><path class="hlgb3ob_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:warning-fill-sharp"} {...others} />);
}

export default Component;
