import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgop8vbfg {
  fill: currentColor;
  d: path("M5 19h14V5H5zm5-11l5 4l-5 4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.j-kgtabyu {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM10 8v8l5-4z");
}
</style><path class="cgop8vbfg"/><path class="j-kgtabyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-slideshow"} {...others} />);
}

export default Component;
