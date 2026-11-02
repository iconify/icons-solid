import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aemn-9ejj {
  fill: currentColor;
  d: path("M11 9.101V9a3 3 0 0 1 4.543-2.572l5 3a2.998 2.998 0 0 1 0 5.144l-5 3A2.998 2.998 0 0 1 11 15v-.101l-4.457 2.673A2.998 2.998 0 0 1 2 15V9a3 3 0 0 1 4.543-2.572Z");
}
</style><path class="aemn-9ejj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fast-forward-fill-round"} {...others} />);
}

export default Component;
