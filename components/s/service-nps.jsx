import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bodfdguue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19m-15.25 0v2m3.75-2v2m3.75-2v2m3.75-2v2m-2.25-10h4.5L17.5 9.75ZM2.5 19.5a1 1.75 0 1 0 2 0a1 1.75 0 1 0-2 0Zm15-1.75v3.5m2-1.75a1 1.75 0 1 0 2 0a1 1.75 0 1 0-2 0Z");
}
</style><path class="bodfdguue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:service-nps"} {...others} />);
}

export default Component;
