import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mp00spb4u {
  d: path("M15.25 16.75H19a2.5 2.5 0 0 1 0 5h-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x76nimv0b {
  d: path("m11.5 3l8 4l-8 4l-8-4Zm-8 8l8 4l.944-.472m1.074-.537l1.162-.581m3.131-1.565L19.5 11m-16 4l8 4l.944-.472M17 15l-1.75 1.75L17 18.5");
}
</style><g class="ulnmmdpxh"><path class="x76nimv0b"/><path class="mp00spb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:model-rollback"} {...others} />);
}

export default Component;
