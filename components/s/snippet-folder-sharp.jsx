import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.za1o8i3ss {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm12.5-4.5v-5h1.375l1.625 1.625V15.5zM13 17h6v-5.5L16.5 9H13z");
}
</style><path class="za1o8i3ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:snippet-folder-sharp"} {...others} />);
}

export default Component;
