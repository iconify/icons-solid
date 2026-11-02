import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jqxjeebqx {
  d: path("M12 4h8v2l-3 3m-3 3v6l-4 2v-8L4 6V4h2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rwv5ytb5v {
  stroke-opacity: 0.4;
  d: path("m4 2l14 14");
}
</style><g class="nrj6p8qat"><path class="rwv5ytb5v"/><path class="jqxjeebqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:filter-off-duocolor-sharp"} {...others} />);
}

export default Component;
