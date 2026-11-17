import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aam_ygb-p {
  d: path("M4 19H20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o5oee7_1m {
  stroke-opacity: 0.4;
  d: path("M7.5 15C7.5 12.515 9.515 10.5 12 10.5C14.485 10.5 16.5 12.515 16.5 15M2 15H3.5M20.5 15H22M4.929 7.929L5.99 8.99M19.071 7.929L18.01 8.99M12 6.5V5");
}
</style><g class="nrj6p8qat"><path class="o5oee7_1m"/><path class="aam_ygb-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sun-horizon-duotone"} {...others} />);
}

export default Component;
