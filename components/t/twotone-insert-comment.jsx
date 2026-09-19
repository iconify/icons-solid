import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cq2hl9bjd {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m0 2v13.17L18.83 16H4V4zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z");
}

.cxftbfa-d {
  fill: currentColor;
  d: path("M4 16h14.83L20 17.17V4H4zM6 6h12v2H6zm0 3h12v2H6zm0 3h12v2H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="cxftbfa-d"/><path class="cq2hl9bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-insert-comment"} {...others} />);
}

export default Component;
