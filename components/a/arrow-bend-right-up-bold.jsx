import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nd7-f4bju {
  fill: currentColor;
  d: path("M208.49 88.49a12 12 0 0 1-17 0L164 61v67A108.12 108.12 0 0 1 56 236a12 12 0 0 1 0-24a84.09 84.09 0 0 0 84-84V61l-27.51 27.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 17");
}
</style><path class="nd7-f4bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-bend-right-up-bold"} {...others} />);
}

export default Component;
