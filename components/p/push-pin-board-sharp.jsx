import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.htd5wpb8c {
  cx: 16px;
  cy: 11px;
  r: 1.5px;
}

.ix5kygeym {
  cx: 8px;
  cy: 8.5px;
  r: 1.5px;
}

.pw7p-85ys {
  d: path("M2.75 3.75h18.5v16.5H2.75z");
}

.t1ruryb_u {
  d: path("M6.5 8.5H5.25v8.25h5.5V8.5H9.5m5.25 2.5h-1.5v6.25h5.5V11H17.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pw7p-85ys"/><path class="t1ruryb_u"/><circle class="ix5kygeym"/><circle class="htd5wpb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:push-pin-board-sharp"} {...others} />);
}

export default Component;
