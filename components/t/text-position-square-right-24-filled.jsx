import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sn8kgzbvj {
  fill: currentColor;
  d: path("M20.25 3.75a1 1 0 1 1 0 2H3.75a1 1 0 0 1 0-2zm-9.5 3.5a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2zm1 8a1 1 0 0 0-1-1h-7a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1m-1-4.5a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm10.5 8a1 1 0 0 0-1-1H3.75a1 1 0 1 0 0 2h16.5a1 1 0 0 0 1-1m-2-7.75a2.25 2.25 0 0 0-4.5 0v4.75a1 1 0 1 1-2 0V11a4.25 4.25 0 0 1 8.5 0v4.75a1 1 0 1 1-2 0z");
}
</style><path class="sn8kgzbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-position-square-right-24-filled"} {...others} />);
}

export default Component;
