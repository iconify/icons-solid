import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e77gki8ci {
  d: path("M2 20V10l3 -3h14l3 3v10");
}

.gfzbj7b6z {
  d: path("M14 14.5a2.5 2.5 0 0 1 2.5 -2.5 2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1 -2.5 2.5 2.5 2.5 0 0 1 -2.5 -2.5Z");
}

.jr8d9xc7c {
  d: path("M6 14.5A2.5 2.5 0 0 1 8.5 12a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 8.5 20 2.5 2.5 0 0 1 6 17.5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e77gki8ci"/><path class="jr8d9xc7c"/><path class="gfzbj7b6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:warehouse-outline-regular"} {...others} />);
}

export default Component;
