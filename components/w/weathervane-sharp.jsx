import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gl7nc-b1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.5L5.25 6l-2.5 2.5M5.25 6h12M12 6v15.25M8 13h8m-7 8.25h6m5.83-15.52l-3.41-2.21l-.42-.27v5.5l.42-.27l3.41-2.21l.42-.27z");
}
</style><path class="gl7nc-b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:weathervane-sharp"} {...others} />);
}

export default Component;
