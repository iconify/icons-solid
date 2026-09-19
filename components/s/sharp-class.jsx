import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uydn-q5_t {
  fill: currentColor;
  d: path("M20 2H4v20h16zM6 4h5v8l-2.5-1.5L6 12z");
}
</style><path class="uydn-q5_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-class"} {...others} />);
}

export default Component;
