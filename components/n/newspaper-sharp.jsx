import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.poa98sv-q {
  d: path("M9.5 7H15v4.5H9.5zm0 7.75h8.25M9.5 17.5H15");
}

.taq3mlwxe {
  d: path("M6.25 3.75h15v16.5h-15zm0 16.5h-3.5V8.75h3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="taq3mlwxe"/><path class="poa98sv-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:newspaper-sharp"} {...others} />);
}

export default Component;
