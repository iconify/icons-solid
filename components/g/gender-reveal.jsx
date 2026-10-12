import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jgyfg-bpu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14.75h.01");
}

.rhj7-w4rz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 18.5h.01");
}

.wyurk4bmy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c4 0 7 3 7 7c0 4.5-3.5 8-7 8s-7-3.5-7-8c0-4 3-7 7-7");
}

.x4gknubrz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 19.5c-1 .75 1 1 0 1.75m-2.25-13a2.25 2.25 0 1 1 3.25 2c-.75.4-1 .9-1 1.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="wyurk4bmy"/><path class="rhj7-w4rz"/><path class="x4gknubrz"/><path class="jgyfg-bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:gender-reveal"} {...others} />);
}

export default Component;
