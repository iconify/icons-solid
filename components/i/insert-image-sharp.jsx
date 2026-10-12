import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mx0g23bpk {
  d: path("M12.75 3.75h-9v16.5h16.5v-8.5M3.75 16.5L8 12.25l3.5 3.5l2-2l3.5 3.5");
}

.qx7i5x3qf {
  d: path("M17.75 2.75v6.5m-2.5-2.5l2.5 2.5l2.5-2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mx0g23bpk"/><path class="qx7i5x3qf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:insert-image-sharp"} {...others} />);
}

export default Component;
