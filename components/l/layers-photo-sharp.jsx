import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p2c1bkqpv {
  d: path("M8.75 2.75h12.5v12.5");
}

.rd2v2-b6r {
  d: path("M5.75 5.75h12.5v12.5");
}

.tficq-bpy {
  d: path("M2.75 8.75h12.5v12.5H2.75z");
}

.x1e96mbnt {
  d: path("m2.75 18.25l3.5-3.5l4 4m-1-1l1.25-1.25l3 3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="p2c1bkqpv"/><path class="rd2v2-b6r"/><path class="tficq-bpy"/><path class="x1e96mbnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:layers-photo-sharp"} {...others} />);
}

export default Component;
