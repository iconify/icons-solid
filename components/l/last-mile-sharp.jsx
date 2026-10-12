import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n9zurybxd {
  d: path("M8.75 13.25h6.5V19h-6.5zm3.25 0v2");
}

.o6h79r7ib {
  d: path("M3.75 10.4v-.461l.35-.299l7.25-6.2l.65-.556l.65.556l7.25 6.2l.35.299V21.25H3.75v-1.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="o6h79r7ib"/><path class="n9zurybxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:last-mile-sharp"} {...others} />);
}

export default Component;
