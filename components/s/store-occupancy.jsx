import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tfajs5bbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM2.5 20.5c0-4 2.5-6 6-6c1.082 0 2.068.191 2.914.573M13 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm1.25 11l.75-2.75h6l.75 2.75M15 17v4.75h6V17m-6.75 0h7.5");
}
</style><path class="tfajs5bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:store-occupancy"} {...others} />);
}

export default Component;
