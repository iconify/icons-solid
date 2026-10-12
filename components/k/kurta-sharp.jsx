import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kfris2sli {
  d: path("M9.75 2.75H15l.66.35l3.43 1.8l.66.35l.21.72l1.08 3.81l.21.72l-.67.34l-1.16.57l-.67.34l-.44-.61l-1.12-1.53l-.44-.61v12.25h-9.5V9l-.44.61l-1.12 1.53l-.44.61l-.67-.34l-1.16-.57l-.67-.34l.21-.72l1.08-3.81l.21-.72l.66-.35l3.43-1.8l.66-.35z");
}

.pbapgub8u {
  d: path("M9.75 3L12 5.25L14.25 3M12 5.25v5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kfris2sli"/><path class="pbapgub8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kurta-sharp"} {...others} />);
}

export default Component;
