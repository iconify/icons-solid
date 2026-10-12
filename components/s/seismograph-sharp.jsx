import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dvzhdg8hu {
  d: path("M2.75 12h3L8 8.5l3 7l3-7l2.25 3.5h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytqkenlip {
  d: path("M3.75 4.75h16.5v14.5H3.75z");
}
</style><g class="x2cwu0gfd"><path class="ytqkenlip"/><path class="dvzhdg8hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:seismograph-sharp"} {...others} />);
}

export default Component;
