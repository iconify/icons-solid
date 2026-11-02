import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j6md32idz {
  stroke-opacity: 0.4;
  d: path("M12 6h7v4m-4-7l-3 3l3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v_vtf3bnh {
  d: path("M19 14v6H5V6h3");
}
</style><g class="nrj6p8qat"><path class="j6md32idz"/><path class="v_vtf3bnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rotate-left-duocolor-sharp"} {...others} />);
}

export default Component;
