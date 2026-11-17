import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aix4qxa9z {
  stroke-opacity: 0.4;
  d: path("M3 16H21M7.276 19.447L5.724 22.553M12.276 19.447L10.724 22.553M17.276 19.447L15.724 22.553");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pi-cetb9l {
  d: path("M7.5 13V12C7.5 9.515 9.515 7.5 12 7.5C14.485 7.5 16.5 9.515 16.5 12V13M1 12H4.5M19.5 12H23M4.636 4.636L6.282 6.282M19.364 4.636L17.718 6.282M12 4.5V1");
}
</style><g class="gp_8x1bzb"><path class="aix4qxa9z"/><path class="pi-cetb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sun-rain-sharp-two-tone"} {...others} />);
}

export default Component;
