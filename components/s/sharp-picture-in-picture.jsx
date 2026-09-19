import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ro3u7ld2q {
  fill: currentColor;
  d: path("M19 7h-8v6h8zm4-4H1v17.98h22zm-2 16.01H3V4.98h18z");
}
</style><path class="ro3u7ld2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-picture-in-picture"} {...others} />);
}

export default Component;
