import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u9wqgbb0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l2.18 6.7H9.82Zm9.23 6.7l-5.71 4.15l-1.34-4.15ZM17.7 20.3L12 16.16l3.52-2.56Zm-11.4 0l2.18-6.7L12 16.16ZM2.77 9.45h7.05L8.48 13.6Z");
}
</style><path class="u9wqgbb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pentagram-sharp"} {...others} />);
}

export default Component;
