import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hnp3t2qtv {
  fill: currentColor;
  d: path("M12 7.77L18.39 18H5.61zM12 4L2 20h20z");
}
</style><path class="hnp3t2qtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-change-history"} {...others} />);
}

export default Component;
