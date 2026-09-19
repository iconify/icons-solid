import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j2ltg6v_y {
  fill: currentColor;
  d: path("M5 18.08V19h.92l9.06-9.06l-.92-.92z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.x_q-jmb8o {
  fill: currentColor;
  d: path("M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92z");
}
</style><path class="j2ltg6v_y"/><path class="x_q-jmb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-edit"} {...others} />);
}

export default Component;
