import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w4z6_roih {
  fill: currentColor;
  d: path("M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M20 6l-8 4.99L4 6zM4 8l8 5l8-5v10H4z");
}

.x6ar14zbh {
  fill: currentColor;
  d: path("m20 8l-8 5l-8-5v10h16zm0-2H4l8 4.99z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="x6ar14zbh"/><path class="w4z6_roih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-email"} {...others} />);
}

export default Component;
