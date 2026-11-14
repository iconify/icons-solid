import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gnj-4pblo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 6c1-1 3.5-1 4.5 0l-1 6.5c3 2 2.5 9-5 9c-6.5 0-7-6.5-4-8.5c1.5-1 3.5-1 4.25-2Zm2.25-.75l.5-2.75");
}
</style><path class="gnj-4pblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:butternut-squash"} {...others} />);
}

export default Component;
