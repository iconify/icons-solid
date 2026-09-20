import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.difn-_bsq {
  fill: currentColor;
  d: path("M9 14h1v1h1.5v-1h1v1H14v-1h1V8h-1.5V6h-3v2H9zm2.5-6V7h1v1zM5 21V3h14v18l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z");
}
</style><path class="difn-_bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bookmark-bag-outline-sharp"} {...others} />);
}

export default Component;
