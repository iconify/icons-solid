import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y7z741u9a {
  fill: currentColor;
  d: path("M6 4v1h12V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2m0 3v1l2 3v9c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-9l2-3V7zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5");
}
</style><path class="y7z741u9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-flashlight-on"} {...others} />);
}

export default Component;
