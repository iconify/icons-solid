import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mcpxotbiw {
  d: path("m6 10.75l3.65 2.75L11 14.512l1.35-1.012L16 10.75m-1.25-8h6.5v8h-6.5zm2 2.5h2.5m-2.5 2.5h1.5");
}

.t0c9a54sn {
  d: path("M2.75 7.25h14.5v12H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t0c9a54sn"/><path class="mcpxotbiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mail-draft-sharp"} {...others} />);
}

export default Component;
