import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gibl43_-b {
  fill: currentColor;
  d: path("M2.5 4v3h5v12h3V7h5V4zm19 5h-9v3h3v7h3v-7h3z");
}
</style><path class="gibl43_-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-text-fields"} {...others} />);
}

export default Component;
