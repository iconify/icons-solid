import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.je2ogp-vs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.6 8.47l7.55-4.69l.85-.53l.85.53l7.55 4.69l.85.53H2.75zM4.75 12v6.5m14.5-6.5v6.5M2.75 21h18.5M8.5 12h7v6h-7zm0 3h7");
}
</style><path class="je2ogp-vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:treasury-sharp"} {...others} />);
}

export default Component;
