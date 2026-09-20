import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xd00ev14p {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m24.49-115.51L121 128l31.52 31.51a12 12 0 0 1-17 17l-40-40a12 12 0 0 1 0-17l40-40a12 12 0 0 1 17 17Z");
}
</style><path class="xd00ev14p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-circle-left-bold"} {...others} />);
}

export default Component;
