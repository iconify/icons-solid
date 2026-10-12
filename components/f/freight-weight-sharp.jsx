import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mq68zybfy {
  cx: 12px;
  cy: 5.75px;
  r: 2.5px;
}

.pht41hpxx {
  d: path("M9 12.5h6V18H9zm3 0v1.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y48srcc4r {
  d: path("M7.2 8.25h9.6l1.157.001l.293 1.119l2.6 10l.492 1.879l-1.942.001H4.6l-1.942-.001l.492-1.879l2.6-10l.293-1.119z");
}
</style><g class="x2cwu0gfd"><circle class="mq68zybfy"/><path class="y48srcc4r"/><path class="pht41hpxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:freight-weight-sharp"} {...others} />);
}

export default Component;
