import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a870vdb4y {
  cx: 18.75px;
  cy: 18.25px;
  r: 2px;
}

.ejqc9bb9x {
  cx: 12px;
  cy: 18.25px;
  r: 2px;
}

.l-zq-1mft {
  cx: 5.25px;
  cy: 18.25px;
  r: 2px;
}

.qpfcnacts {
  d: path("M2.75 2.75h18.5v10H2.75zm3.75 5h7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qpfcnacts"/><circle class="l-zq-1mft"/><circle class="ejqc9bb9x"/><circle class="a870vdb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:classroom-sharp"} {...others} />);
}

export default Component;
