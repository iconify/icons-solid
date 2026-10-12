import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mwx784ofx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.75h5l1.25 3a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0ZM5.75 9.5h12.5l1.25 3a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0ZM4.5 16.25h15l1.25 3a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1-2.5 0Z");
}
</style><path class="mwx784ofx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:roof"} {...others} />);
}

export default Component;
