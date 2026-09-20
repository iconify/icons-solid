import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g4kz7hbgn {
  fill: currentColor;
  d: path("M1 18.308v-1h2V4.538h18v12.77h2v1zm9-1h4v-.77h-4z");
}
</style><path class="g4kz7hbgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:laptop-chromebook"} {...others} />);
}

export default Component;
