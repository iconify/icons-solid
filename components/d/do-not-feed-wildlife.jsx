import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9slbynoa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.45 18.434c-.778.208-1.6.316-2.45.316c-5 0-9-3.75-9-9.25h2.6m7.8 0H21c0 2.267-.68 4.237-1.829 5.769M8.5 21.5h7m-12-18l17 17");
}
</style><path class="m9slbynoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:do-not-feed-wildlife"} {...others} />);
}

export default Component;
