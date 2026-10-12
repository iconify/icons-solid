import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bopadj-pu {
  cx: 10.5px;
  cy: 15.5px;
  r: 1.75px;
}

.cmjk_yr7d {
  d: path("M2.75 7.25v-2.5h7.1l.6.8L11.55 7l.6.8h9.1v12.95H2.75v-2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yurdirv5b {
  d: path("M12.25 15.5v-5l2.5 1");
}
</style><g class="x2cwu0gfd"><path class="cmjk_yr7d"/><circle class="bopadj-pu"/><path class="yurdirv5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:music-folder-sharp"} {...others} />);
}

export default Component;
