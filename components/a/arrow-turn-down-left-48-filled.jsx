import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iadiydzyj {
  fill: currentColor;
  d: path("M35 7.5a1.5 1.5 0 0 1 3 0v18a7.5 7.5 0 0 1-7.5 7.5H13.121l6.44 6.44a1.5 1.5 0 0 1-2.122 2.12l-9-9a1.5 1.5 0 0 1 0-2.12l9-9a1.5 1.5 0 0 1 2.122 2.12L13.12 30H30.5a4.5 4.5 0 0 0 4.5-4.5z");
}
</style><path class="iadiydzyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-turn-down-left-48-filled"} {...others} />);
}

export default Component;
