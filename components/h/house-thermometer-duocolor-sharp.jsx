import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.is_4m5cif {
  d: path("m12 3l8 7v11H4V10z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pi7p2pb7q {
  stroke-opacity: 0.4;
  d: path("M12 8a1.5 1.5 0 0 1 1.5 1.5v4.373A2.25 2.25 0 0 1 12 17.8M12 8a1.5 1.5 0 0 0-1.5 1.5v4.373A2.25 2.25 0 0 0 12 17.8");
}
</style><g class="nrj6p8qat"><path class="pi7p2pb7q"/><path class="is_4m5cif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-thermometer-duocolor-sharp"} {...others} />);
}

export default Component;
