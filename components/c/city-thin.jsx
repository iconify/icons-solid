import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.f3zzm0b5d {
  fill: currentColor;
  d: path("M240 212h-12V88a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v44h-56V40a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v172H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M164 92h56v120h-56Zm-8 48v72h-56v-72ZM36 44h56v168H36Zm32 28v16a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m0 48v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m0 48v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m56 16v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m64 0v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m0-48v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0");
}
</style><path class="f3zzm0b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:city-thin"} {...others} />);
}

export default Component;
