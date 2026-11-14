import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ub73n5btp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 11.792V3.5c-4 0-7 .5-9 2c-2-1.5-5-2-9-2v14c3.527 0 6.276.389 8.248 1.509M12 5.5v12.8m7.768-3.836l1.768 1.768l-5.304 5.304l-1.768-1.768Z");
}
</style><path class="ub73n5btp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kb-article-edit"} {...others} />);
}

export default Component;
