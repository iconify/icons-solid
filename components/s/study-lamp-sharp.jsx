import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p3_s_ie-s {
  d: path("m12.9 5.95l-.8.6l-.8.6l.25.97l1.1 4.36l.25.97l.8-.6l4.8-3.6l.8-.6l-.86-.51l-3.88-2.28l-.86-.51z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y03olnbck {
  d: path("M3.75 18.75h9.5v2.5h-9.5zm4.75 0l-3-6.25l6.5-6");
}
</style><g class="x2cwu0gfd"><path class="y03olnbck"/><path class="p3_s_ie-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:study-lamp-sharp"} {...others} />);
}

export default Component;
