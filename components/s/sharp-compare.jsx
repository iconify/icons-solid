import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sfgvg5b2w {
  fill: currentColor;
  d: path("M10 3H3v18h7v2h2V1h-2zm0 15H5l5-6zM21 3h-7v2h5v13l-5-6v9h7z");
}
</style><path class="sfgvg5b2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-compare"} {...others} />);
}

export default Component;
