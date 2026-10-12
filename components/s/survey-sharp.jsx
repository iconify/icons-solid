import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a3cu9ndgh {
  d: path("M12.5 11.5h3.25");
}

.df71beb1q {
  d: path("M4.75 2.75h14.5v18.5H4.75zm3.5 4h7.5");
}

.oggm679kn {
  cx: 9px;
  cy: 16.5px;
  r: 1.5px;
}

.pbtvbbcua {
  cx: 9px;
  cy: 11.5px;
  r: 1.5px;
}

.pv0kulbqn {
  d: path("M12.5 16.5h3.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="df71beb1q"/><circle class="pbtvbbcua"/><path class="a3cu9ndgh"/><circle class="oggm679kn"/><path class="pv0kulbqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:survey-sharp"} {...others} />);
}

export default Component;
