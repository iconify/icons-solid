import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dr3hs9bil {
  fill: currentColor;
  d: path("M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m0 16.01H3V4.98h18z");
}

.rpldipb-r {
  fill: currentColor;
  d: path("M13 9h4v2h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.yq6pcacnm {
  fill: currentColor;
  d: path("M19 7h-8v6h8zm-2 4h-4V9h4z");
}
</style><path class="yq6pcacnm"/><path class="rpldipb-r"/><path class="dr3hs9bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-picture-in-picture"} {...others} />);
}

export default Component;
