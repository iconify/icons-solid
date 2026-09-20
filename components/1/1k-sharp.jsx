import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v_pxelbmv {
  fill: currentColor;
  d: path("M12 15h1.5v-2.25L15.25 15H17l-2.25-3L17 9h-1.75l-1.75 2.25V9H12zm-3.5 0H10V9H7v1.5h1.5zM3 21V3h18v18z");
}
</style><path class="v_pxelbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:1k-sharp"} {...others} />);
}

export default Component;
