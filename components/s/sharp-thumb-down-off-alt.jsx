import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.onumwmbhr {
  fill: currentColor;
  d: path("M19 3h4v12h-4zM1 11.6V16h8.31l-1.12 5.38L9.83 23L17 15.82V3H4.69zM15 5v9.99l-4.34 4.35l.61-2.93l.5-2.41H3v-1.99L6.01 5z");
}
</style><path class="onumwmbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-thumb-down-off-alt"} {...others} />);
}

export default Component;
