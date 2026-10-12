import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.juagu4zdo {
  cx: 5.5px;
  cy: 17.75px;
  r: 2.5px;
}

.oecphbwmk {
  cx: 12px;
  cy: 6px;
  r: 2.5px;
}

.rxgp3fbut {
  cx: 18.5px;
  cy: 17.75px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="oecphbwmk"/><circle class="juagu4zdo"/><circle class="rxgp3fbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:therefore-sharp"} {...others} />);
}

export default Component;
