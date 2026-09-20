import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.acfut5b3q {
  fill: currentColor;
  d: path("M224 68h-52V56a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M92 56a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92ZM32 76h192a4 4 0 0 1 4 4v36h-40v-12a4 4 0 0 0-8 0v12H76v-12a4 4 0 0 0-8 0v12H28V80a4 4 0 0 1 4-4m192 120H32a4 4 0 0 1-4-4v-68h40v12a4 4 0 0 0 8 0v-12h104v12a4 4 0 0 0 8 0v-12h40v68a4 4 0 0 1-4 4");
}
</style><path class="acfut5b3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:toolbox-thin"} {...others} />);
}

export default Component;
