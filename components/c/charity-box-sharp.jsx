import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.my5bf6b2p {
  d: path("M12 19.25L9.6 16.9a1.55 1.55 0 0 1 2.4-1.95a1.55 1.55 0 0 1 2.4 1.95Z");
}

.r706qacpy {
  d: path("M3.75 9.5h16.5v11.75H3.75zM9 12h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="e9-7-8-2z"/><path class="r706qacpy"/><path class="my5bf6b2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:charity-box-sharp"} {...others} />);
}

export default Component;
