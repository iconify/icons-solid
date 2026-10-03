import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_m71knqm {
  d: path("M10 11.6028L10.4521 14.5685M13.9543 11L14.4064 13.9657");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rx1c9hbvz {
  d: path("M6 19L18 19C20.2091 19 22 17.2091 22 15C22 12.7909 20.2091 11 18 11C18 7.6863 15.3137 5 12 5C8.6863 5 6 7.6863 6 11C3.7909 11 2 12.7909 2 15C2 17.2091 3.7909 19 6 19Z");
}
</style><g class="nrj6p8qat"><path class="rx1c9hbvz"/><path class="f_m71knqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bot-cloud"} {...others} />);
}

export default Component;
