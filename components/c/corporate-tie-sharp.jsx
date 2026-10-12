import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s0eocdmmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.35 2.75h3.9l-.19.57l-.47 1.36l-.19.57h-2.8l-.19-.57l-.47-1.36l-.19-.57zm1.15 5h2l.22.98l1.81 8.04l.22.98l-.73.68l-2.29 2.14l-.73.68l-.73-.68l-2.29-2.14l-.73-.68l.22-.98l1.81-8.04l.22-.98zm-1.25 5.75l3.25-1.75");
}
</style><path class="s0eocdmmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:corporate-tie-sharp"} {...others} />);
}

export default Component;
