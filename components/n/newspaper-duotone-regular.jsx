import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1iadc4sf {
  d: path("M4 13h12");
}

.jlj43xbts {
  d: path("M18 9h4v8h-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o903avb-o {
  d: path("M2 19V6h16v13Z");
}

.rb4hcopdf {
  fill: currentColor;
  d: path("M2 19V6h16v13Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tldtqlb3m {
  d: path("M10 13v4");
}

.xrifsibej {
  d: path("M4 10h12");
}
</style><g class="nrj6p8qat"><path class="rb4hcopdf"/><path class="o903avb-o"/><path class="jlj43xbts"/><path class="xrifsibej"/><path class="tldtqlb3m"/><path class="a1iadc4sf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:newspaper-duotone-regular"} {...others} />);
}

export default Component;
