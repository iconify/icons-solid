import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b1ohi6b8i {
  d: path("M11.75 8.75V11l2 1.353l2-1.353V8.75M10.25 15h6.5m-6.5 3h4");
}

.q_5d6_apa {
  d: path("m14.2 6.46l2.6 1.23l.45.21l-.45.21l-2.6 1.23l-.45.21l-.45-.21l-2.6-1.23l-.45-.21l.45-.21l2.6-1.23l.45-.21z");
}

.t77_dpr5q {
  d: path("M3.75 2.75h16.5v18.5H3.75zm3.5 0v18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t77_dpr5q"/><path class="q_5d6_apa"/><path class="b1ohi6b8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:thesis-sharp"} {...others} />);
}

export default Component;
