import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r56g5dama {
  fill: currentColor;
  d: path("M6 8V6h12v2zm1.4 10.4L6 17l6-6l6 6l-1.4 1.4l-4.6-4.6z");
}
</style><path class="r56g5dama"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chevron-line-up"} {...others} />);
}

export default Component;
