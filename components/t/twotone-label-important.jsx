import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gs_50lo8r {
  fill: currentColor;
  d: path("M15 7H7.89l3.57 5l-3.57 5H15l3.55-5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.jen8fobjo {
  fill: currentColor;
  d: path("M16.63 5.84C16.27 5.33 15.67 5 15 5H4l5 7l-5 6.99h11c.67 0 1.27-.32 1.63-.83L21 12zM15 17H7.89l3.57-5l-3.57-5H15l3.55 5z");
}
</style><path class="gs_50lo8r"/><path class="jen8fobjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-label-important"} {...others} />);
}

export default Component;
