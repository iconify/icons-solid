import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nm7srwzks {
  d: path("M4.045 17.48L17.48 4.045l2.475 2.475L6.52 19.955Z");
}

.ogg2xy5lu {
  d: path("m8.464 18.01l2.122-2.121l3.889 3.889l-2.121 2.121Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nm7srwzks"/><path class="ogg2xy5lu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tonfa-training"} {...others} />);
}

export default Component;
