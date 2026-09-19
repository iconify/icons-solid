import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zbqu8obfp {
  fill: currentColor;
  d: path("M16 8c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-5v-2h5c.55 0 1-.45 1-1s-.45-1-1-1h-5V9h5c.55 0 1-.45 1-1");
}
</style><path class="zbqu8obfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-e-mobiledata"} {...others} />);
}

export default Component;
