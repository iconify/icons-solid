import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n2bu0t1dg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h12.5l.05 1l.9 16.5l.05 1H15l-.29-.96l-2.42-7.83l-.29-.96l-.29.96l-2.42 7.83l-.29.96H4.25l.05-1l.9-16.5l.05-1zm-1.3 3.5h14.1m-7.05 0V8");
}
</style><path class="n2bu0t1dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:jeans-sharp"} {...others} />);
}

export default Component;
