import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eo9m4eehz {
  fill: currentColor;
  d: path("M3 7a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm7.5 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zM18 7a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM3 15a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z");
}
</style><path class="eo9m4eehz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-2-dashes-solid-24-filled"} {...others} />);
}

export default Component;
