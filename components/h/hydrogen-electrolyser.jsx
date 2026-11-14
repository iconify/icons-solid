import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a2trj5hgt {
  d: path("M5.5 6a6.5 2.5 0 0 0 13 0M12 11.25c1.25 1.75 2.5 3 2.5 4.5a2.5 2.5 0 0 1-5 0c0-1.5 1.25-2.75 2.5-4.5Z");
}

.txoh7db5n {
  d: path("M5.5 6a6.5 2.5 0 0 1 13 0v12.5a6.5 2.5 0 0 1-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="txoh7db5n"/><path class="a2trj5hgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hydrogen-electrolyser"} {...others} />);
}

export default Component;
