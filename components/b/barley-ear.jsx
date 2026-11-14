import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fi8t1zjts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V8m0 11c-2.5 0-4-2-4-4.5c2.5 0 4 2 4 4.5Zm0-5.5c-2.5 0-4-2-4-4.5c2.5 0 4 2 4 4.5Zm0 5.5c2.5 0 4-2 4-4.5c-2.5 0-4 2-4 4.5Zm0-5.5c2.5 0 4-2 4-4.5c-2.5 0-4 2-4 4.5ZM12 8c-1.25-1.5-1.25-3.5 0-5c1.25 1.5 1.25 3.5 0 5ZM8 9L5 3.5M16 9l3-5.5m-11 11l-4.5-5m12.5 5l4.5-5");
}
</style><path class="fi8t1zjts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:barley-ear"} {...others} />);
}

export default Component;
