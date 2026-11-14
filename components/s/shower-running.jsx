import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u-dbbte2p {
  d: path("M3.5 3H9a3 3 0 0 1 3 3v1");
}

.umw3mubll {
  d: path("M6.5 12a5.5 5.5 0 0 1 11 0Zm2 3l-.75 5M12 15v6m3.5-6l.75 5");
}
</style><g class="hntgybcog"><path class="u-dbbte2p"/><path class="umw3mubll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:shower-running"} {...others} />);
}

export default Component;
