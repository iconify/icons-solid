import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.n---ws7pi {
  fill: var(--svg-color--fff, #fff);
  d: path("M18 5h-8v4h8.01A7 7 0 0 1 18 23h-4v-4l-7.2 6l7.2 6v-4h4c6.074 0 11-4.926 11-11c0-6.075-4.926-11-11-11");
}

.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="x-kz1kb7j"/><path class="n---ws7pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:right-arrow-curving-left"} {...others} />);
}

export default Component;
