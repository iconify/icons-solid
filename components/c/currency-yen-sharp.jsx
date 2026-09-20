import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tplfl-b9e {
  fill: currentColor;
  d: path("M11 21v-4H6v-2h5v-2H6v-2h4.075L5 3h2.375L12 10.3L16.625 3H19l-5.075 8H18v2h-5v2h5v2h-5v4z");
}
</style><path class="tplfl-b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:currency-yen-sharp"} {...others} />);
}

export default Component;
