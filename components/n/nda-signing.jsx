import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r2-zcbbus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h7.5v6.5H3Zm1.75 0V7a2 2 0 0 1 4 0v2m9.951-.446l2.598 1.5l-4.625 8.011L14 19.696l.076-3.131ZM3 19.75h11");
}
</style><path class="r2-zcbbus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:nda-signing"} {...others} />);
}

export default Component;
