import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hg7krvbzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.39 3.67l6.72 15.91l.39.92l-.89-.45l-5.72-2.85l-.89-.45l-.89.45l-5.72 2.85l-.89.45l.39-.92l6.72-15.91l.39-.92z");
}
</style><path class="hg7krvbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:navigation-sharp"} {...others} />);
}

export default Component;
