import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bepbfwb4i {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 3v18l-2-2l-2 2l-2-2l-2 2l-2-2l-2 2l-2-2l-2 2V3Z");
}

.ft5dv1b6b {
  fill: none;
}

.v-oxtcc7a {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h8v18l-2-2l-2 2l-2-2l-2 2l-2-2l-2 2l-2-2l-2 2V3zM8 7h8m-8 4h8m-8 4h4");
}
</style><g class="ft5dv1b6b"><path class="bepbfwb4i"/><path class="v-oxtcc7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:receipt-duotone-sharp"} {...others} />);
}

export default Component;
