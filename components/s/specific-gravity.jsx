import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cmwuxw09s {
  fill: currentColor;
  d: path("M7.558 21q-.626 0-1.09-.403q-.465-.402-.526-1.026L4.115 3h15.77l-1.827 16.571q-.061.624-.525 1.027q-.465.402-1.09.402zM5.733 8.5h3.829q.467-.475 1.093-.737Q11.281 7.5 12 7.5t1.345.263t1.094.737h3.828L18.75 4H5.225zm6.27 5q1.034 0 1.765-.735t.732-1.769t-.735-1.764t-1.769-.732t-1.764.736t-.732 1.768t.736 1.764t1.768.732");
}
</style><path class="cmwuxw09s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:specific-gravity"} {...others} />);
}

export default Component;
