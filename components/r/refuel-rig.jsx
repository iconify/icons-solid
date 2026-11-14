import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fqpatt0eo {
  d: path("M3.5 3h10v18.5h-10Zm10 3H17a2 2 0 0 1 2 2v8m-1.5 0h3v3h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vi_l16b5u {
  d: path("M6.25 6h4.5v4h-4.5ZM19 19v2");
}
</style><g class="ulnmmdpxh"><path class="fqpatt0eo"/><path class="vi_l16b5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:refuel-rig"} {...others} />);
}

export default Component;
