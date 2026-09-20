import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d5ewpzb2a {
  d: path("M12 20c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vi0rmgvkt {
  d: path("M4 11c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}
</style><g class="s0phu2bbs"><path class="vi0rmgvkt"/><path class="d5ewpzb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:leaf-fall-outline-bold"} {...others} />);
}

export default Component;
