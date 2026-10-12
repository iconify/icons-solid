import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aufc031ya {
  d: path("M2.75 20.75V4.5H4.4V6h1.45V4.5H7.5V10h1.75V8.5h1.85V10h1.8V8.5h1.85V10h1.75V4.5h1.65V6h1.45V4.5h1.65v16.75H2.75z");
}

.euafkmfqu {
  d: path("M9.75 21.25V17.5a2.25 2.25 0 0 1 4.5 0v3.75M5.1 10v2m13.8-2v2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="aufc031ya"/><path class="euafkmfqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:castle-sharp"} {...others} />);
}

export default Component;
