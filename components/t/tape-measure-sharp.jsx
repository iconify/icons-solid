import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cz5-ttb5g {
  d: path("M13.75 11.25a3.5 3.5 0 1 1-7 0a3.5 3.5 0 1 1 7 0m4 3h3.5v3");
}

.knxkgnbtg {
  d: path("M2.75 3.75h15v15h-15z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="knxkgnbtg"/><path class="cz5-ttb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tape-measure-sharp"} {...others} />);
}

export default Component;
