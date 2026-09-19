import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jtw4p1b_a {
  fill: currentColor;
  d: path("M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 4h2v5l-1-.75L9 9zm9 16H6V4h1v9l3-2.25L13 13V4h5z");
}

.taj93kbky {
  fill: currentColor;
  d: path("m13 13l-3-2.25L7 13V4H6v16h12V4h-5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="taj93kbky"/><path class="jtw4p1b_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-class"} {...others} />);
}

export default Component;
