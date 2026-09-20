import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o5mi336os {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40.49-116.49a12 12 0 0 1-17 17L128 89l-23.51 23.52a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Zm0 48a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L128 167l23.51-23.52a12 12 0 0 1 16.98.03");
}
</style><path class="o5mi336os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-circle-up-down-bold"} {...others} />);
}

export default Component;
