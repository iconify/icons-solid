import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y6cgbeyyn {
  fill: currentColor;
  d: path("M6 16h12V8H6zm2-2l2.125-2.825L11.5 13l1.875-2.5L16 14zm-6 6V4h20v16z");
}
</style><path class="y6cgbeyyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:image-inset-sharp"} {...others} />);
}

export default Component;
