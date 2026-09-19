import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.loq6s5pgf {
  fill: currentColor;
  d: path("M19 8v3H5.83l2.88-2.88A.996.996 0 1 0 7.3 6.71L2.71 11.3a.996.996 0 0 0 0 1.41L7.3 17.3a.996.996 0 1 0 1.41-1.41L5.83 13H20c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1");
}
</style><path class="loq6s5pgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-keyboard-return"} {...others} />);
}

export default Component;
