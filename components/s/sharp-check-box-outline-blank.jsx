import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewqsqbb3w {
  fill: currentColor;
  d: path("M19 5v14H5V5zm2-2H3v18h18z");
}
</style><path class="ewqsqbb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-check-box-outline-blank"} {...others} />);
}

export default Component;
