import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0jjyjb7x {
  d: path("m12 14.48l-1.54-1.54l-.66-.64v-1.78h1.76l.44.44l.44-.44h1.76v1.78l-.66.64Z");
}

.z6_cp4b5i {
  d: path("M8.8 3H10l.57.57l.86.86L12 5l.57-.57l.86-.86L14 3h2l.64.47l3.47 2.56l.64.47l-.4.69l-1.2 2.12l-.4.69l-.73-.32l-.79-.36L16.5 9v8l-.41.69l-1.68 2.87l-.41.69h-4l-.41-.69l-1.68-2.87L7.5 17V9l-.73.32l-.79.36l-.73.32l-.4-.69l-1.2-2.12l-.4-.69l.64-.47l3.47-2.56L8 3z");
}
</style><g class="x2cwu0gfd"><path class="z6_cp4b5i"/><path class="y0jjyjb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:baby-shower-sharp"} {...others} />);
}

export default Component;
