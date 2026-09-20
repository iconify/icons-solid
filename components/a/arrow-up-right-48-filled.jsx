import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m_qt9gm9y {
  fill: currentColor;
  d: path("M22.5 6a1.5 1.5 0 0 0 0 3h14.379L6.439 39.44a1.5 1.5 0 1 0 2.122 2.12L39 11.122V25.5a1.5 1.5 0 0 0 3 0v-18A1.5 1.5 0 0 0 40.5 6z");
}
</style><path class="m_qt9gm9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-right-48-filled"} {...others} />);
}

export default Component;
