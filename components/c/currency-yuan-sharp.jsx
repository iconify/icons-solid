import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sa2x56nbq {
  fill: currentColor;
  d: path("M11 21v-7H6v-2h4.725L5 3h2.375L12 10.3L16.625 3H19l-5.725 9H18v2h-5v7z");
}
</style><path class="sa2x56nbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:currency-yuan-sharp"} {...others} />);
}

export default Component;
