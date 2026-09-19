import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kjoljvb2a {
  fill: currentColor;
  d: path("M14 16h5V8h-5zm2-6h1v4h-1zm-8 6h5V8H8zm2-6h1v4h-1zM5 8h2v8H5zM2 4v16h20V4zm18 14H4V6h16z");
}
</style><path class="kjoljvb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-money"} {...others} />);
}

export default Component;
