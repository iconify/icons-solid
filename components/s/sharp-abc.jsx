import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.elav66bmh {
  fill: currentColor;
  d: path("M21 11h-1.5v-.5h-2v3h2V13H21v2h-5V9h5zM8 9v6H6.5v-1.5h-2V15H3V9zm-1.5 1.5h-2V12h2zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M11 10.5v.75h2v-.75zm2 2.25h-2v.75h2z");
}
</style><path class="elav66bmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-abc"} {...others} />);
}

export default Component;
