import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6jxbpdek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 19.25l10-10L14.5 4.5h5.25a1.75 1.75 0 0 1 0 3.5H17.5L4.75 21.25a1.5 1.5 0 0 1-2-2ZM17 15.5c-1.25 0-1.75.75-1.75 2s.75 2 1 2.75l.5 1.5h1l.5-1.5l.5 1.5h1l.5-1.5c.25-.75 1-1.5 1-2.75s-.5-2-1.75-2c-.5 0-.75.25-1.25.25s-.75-.25-1.25-.25Z");
}
</style><path class="d6jxbpdek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:intraoral-scanner"} {...others} />);
}

export default Component;
