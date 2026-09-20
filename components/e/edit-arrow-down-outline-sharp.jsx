import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.slug1wbxm {
  fill: currentColor;
  d: path("M19.5 20L16 16.5l1.425-1.4l1.075 1.075V4h2v12.2l1.1-1.1l1.4 1.4zM3 18v-4.075l7.375-7.35q.6-.6 1.438-.575t1.412.625l1.2 1.25q.575.575.563 1.4t-.588 1.4L7.075 18zm2-2h1.25l4.05-4.05l-.625-.625l-.625-.625L5 14.75zm6.725-5.475l-1.25-1.25z");
}
</style><path class="slug1wbxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:edit-arrow-down-outline-sharp"} {...others} />);
}

export default Component;
