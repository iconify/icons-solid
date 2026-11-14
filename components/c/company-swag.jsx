import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aw08zkgrd {
  d: path("M8 3c.75 2.25 2.25 3.25 4 3.25s3.25-1 4-3.25m-4 11.5h.01");
}

.ivnh3mf9j {
  d: path("M8 3L3 7l2.5 3.5l2-1.25V21h9V9.25l2 1.25L21 7l-5-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ivnh3mf9j"/><path class="aw08zkgrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:company-swag"} {...others} />);
}

export default Component;
