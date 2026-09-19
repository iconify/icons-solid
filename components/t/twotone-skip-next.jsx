import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.by3ac43bk {
  fill: currentColor;
  d: path("M14.5 12L6 6v12zM8 9.86L11.03 12L8 14.14zM16 6h2v12h-2z");
}

.qv3avbbbs {
  fill: currentColor;
  d: path("M8 9.86v4.28L11.03 12z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="qv3avbbbs"/><path class="by3ac43bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-skip-next"} {...others} />);
}

export default Component;
