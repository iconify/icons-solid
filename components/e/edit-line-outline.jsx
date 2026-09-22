import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l3vj-pbhj {
  fill: currentColor;
  d: path("m10.05 21l2-2H22v2zM5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.275-.275.65-.425t.775-.15t.763.162t.662.438L20.425 5q.275.3.425.663T21 6.4q0 .4-.137.762t-.438.663L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z");
}
</style><path class="l3vj-pbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:edit-line-outline"} {...others} />);
}

export default Component;
