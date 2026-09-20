import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hniii2byp {
  fill: currentColor;
  d: path("M5.308 15.692h1.384q-.096-.536-.472-.912t-.912-.472zm3.55 0h.873q0-1.844-1.294-3.133q-1.294-1.29-3.13-1.29v.873q1.476 0 2.513 1.038t1.038 2.512m3.038 0h.873q0-1.534-.583-2.9q-.583-1.364-1.597-2.38T8.211 8.815t-2.903-.583v.873q2.744 0 4.666 1.924t1.922 4.664M9 20v-2H3V4h18v14h-6v2z");
}
</style><path class="hniii2byp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:connected-tv-sharp"} {...others} />);
}

export default Component;
