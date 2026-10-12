import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p-gvhgq-a {
  d: path("M2.75 11.25h15l3.5-5m-3.5 5v6.5M5.25 14.5c1.25-.75 2.5.75 3.75 0l1.875-1.125L12.75 14.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z4ew57f6q {
  d: path("M7.5 6.25h13.75v6.5l-.72 1.02l-2.06 2.96l-.72 1.02h-15v-6.5l.72-1.02l2.06-2.96l.72-1.02z");
}
</style><g class="x2cwu0gfd"><path class="z4ew57f6q"/><path class="p-gvhgq-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mattress-sharp"} {...others} />);
}

export default Component;
