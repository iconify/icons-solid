import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.beqlmob4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5h18v4H3Zm1.5 4h15v9h-15Zm7.5-4v13m0-13c-2.5 0-5-1-5-2.75S10 3 12 7.5C14 3 17 3 17 4.75S14.5 7.5 12 7.5Z");
}
</style><path class="beqlmob4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:grant-dao"} {...others} />);
}

export default Component;
