import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lckuwvg-j {
  fill: currentColor;
  d: path("M9 16h6v-6h4l-7-7l-7 7h4zm-4 2h14v2H5z");
}
</style><path class="lckuwvg-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:file-upload"} {...others} />);
}

export default Component;
