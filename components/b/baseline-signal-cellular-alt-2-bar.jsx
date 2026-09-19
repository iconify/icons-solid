import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8vvoplie {
  fill: currentColor;
  d: path("M5 14h3v6H5zm6-5h3v11h-3z");
}
</style><path class="a8vvoplie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-signal-cellular-alt-2-bar"} {...others} />);
}

export default Component;
