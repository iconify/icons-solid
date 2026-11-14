import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v9rrw0hpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.379 2.55l7.071 7.071l-2.829 2.829L8.55 5.379Zm-.404 5.354l2.121 2.121l-7.071 7.071l-2.121-2.121ZM18.5 15.5v6M16 17l5 3m-5 0l5-3");
}
</style><path class="v9rrw0hpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ice-scraper"} {...others} />);
}

export default Component;
