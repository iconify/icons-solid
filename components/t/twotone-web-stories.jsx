import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aawwy1ben {
  fill: currentColor;
  d: path("M4 4h9v16H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.cwsudwtri {
  fill: currentColor;
  d: path("M17 4v16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-4-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H4V4h9zm8-14v12c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5");
}
</style><path class="aawwy1ben"/><path class="cwsudwtri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-web-stories"} {...others} />);
}

export default Component;
