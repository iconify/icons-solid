import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aurd0fsyr {
  fill: currentColor;
  d: path("m10.25 22.25l-8.5-8.5q-.275-.275-.275-.7t.275-.7l10.6-10.6q.275-.275.688-.275t.712.3l8.5 8.475q.275.275.275.7t-.275.7l-10.6 10.6q-.275.275-.7.275t-.7-.275");
}
</style><path class="aurd0fsyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:highlighter-size-5"} {...others} />);
}

export default Component;
