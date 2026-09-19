import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f51axpbuv {
  fill: currentColor;
  d: path("m2 9l4 12h12l4-12l-10-7z");
}
</style><path class="f51axpbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-pentagon"} {...others} />);
}

export default Component;
