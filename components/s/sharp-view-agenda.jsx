import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mn-vzhbwb {
  fill: currentColor;
  d: path("M3 13h18v8H3zM3 3h18v8H3z");
}
</style><path class="mn-vzhbwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-agenda"} {...others} />);
}

export default Component;
