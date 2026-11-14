import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hs2zz94xq {
  d: path("M3 16a12 12 0 0 1 18 0");
}

.hul4rvhlx {
  d: path("M3 12.5a12 12 0 0 1 18 0");
}

.mm3ooywih {
  d: path("M3 19.5a12 12 0 0 1 18 0Z");
}

.opjk_568w {
  d: path("M3 9a12 12 0 0 1 18 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mm3ooywih"/><path class="hs2zz94xq"/><path class="hul4rvhlx"/><path class="opjk_568w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:atmosphere-layers"} {...others} />);
}

export default Component;
