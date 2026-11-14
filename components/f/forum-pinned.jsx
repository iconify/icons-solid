import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.liynxly2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h19v11.5h-19Zm10.925-4.682l4.531 2.113l-.514-2.446l.845-1.813l-1.812-.845l-.846 1.813ZM14 10l1.69-3.625M6.5 14.25h11m-11 3.5h6");
}
</style><path class="liynxly2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:forum-pinned"} {...others} />);
}

export default Component;
