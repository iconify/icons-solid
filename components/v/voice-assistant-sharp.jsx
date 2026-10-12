import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bs5pokvta {
  d: path("M2.75 13c0-1.93 4.14-3.5 9.25-3.5s9.25 1.57 9.25 3.5v3.25c0 1.93-4.14 3.5-9.25 3.5s-9.25-1.57-9.25-3.5Z");
}

.pd4q0tb5b {
  d: path("M2.75 13c0 1.93 4.14 3.5 9.25 3.5s9.25-1.57 9.25-3.5M12 3.25v3.5m-3.5-2v1.5m7-1.5v1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bs5pokvta"/><path class="pd4q0tb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:voice-assistant-sharp"} {...others} />);
}

export default Component;
