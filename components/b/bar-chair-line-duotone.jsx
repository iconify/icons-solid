import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ecv2oy3sx {
  d: path("M15 8L18 22");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klxj4gb1b {
  d: path("M8.93963 2.25496L8.54207 2.32168C6.30192 2.69766 4.75731 4.72857 5.0315 6.93751L5.04953 7.08273C5.11452 7.6063 5.56847 8 6.10719 8H17.8928C18.4315 8 18.8855 7.6063 18.9505 7.08273L18.9685 6.93751C19.2427 4.72857 17.6981 2.69766 15.4579 2.32168L15.0604 2.25496C13.0349 1.91501 10.9651 1.91501 8.93963 2.25496Z");
}

.pxcn82x1k {
  d: path("M16.5 17H7.5");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.rw1sm-ddm {
  d: path("M9 8L6 22");
}
</style><g class="ipq1z-bjh"><path class="klxj4gb1b"/><path class="rw1sm-ddm"/><path class="ecv2oy3sx"/><path class="pxcn82x1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bar-chair-line-duotone"} {...others} />);
}

export default Component;
