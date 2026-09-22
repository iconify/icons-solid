import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ri57rpx1a {
  fill: currentColor;
  d: path("m10.05 21l2-2H22v2zM3 21v-4.25L16.2 3.575q.275-.275.65-.425t.775-.15t.763.162t.662.438L20.425 5q.275.3.425.663T21 6.4q0 .4-.137.762t-.438.663L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z");
}
</style><path class="ri57rpx1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:edit-line"} {...others} />);
}

export default Component;
