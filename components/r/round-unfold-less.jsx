import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gnprd5sdn {
  fill: currentColor;
  d: path("M8.12 19.3c.39.39 1.02.39 1.41 0L12 16.83l2.47 2.47a.996.996 0 1 0 1.41-1.41l-3.17-3.17a.996.996 0 0 0-1.41 0l-3.17 3.17c-.4.38-.4 1.02-.01 1.41m7.76-14.6a.996.996 0 0 0-1.41 0L12 7.17L9.53 4.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42l3.17 3.17c.39.39 1.02.39 1.41 0l3.17-3.17c.4-.39.4-1.03.01-1.42");
}
</style><path class="gnprd5sdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-unfold-less"} {...others} />);
}

export default Component;
