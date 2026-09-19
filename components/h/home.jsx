import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i2ky_fbxv {
  fill: currentColor;
  d: path("M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z");
}
</style><path class="i2ky_fbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:home"} {...others} />);
}

export default Component;
