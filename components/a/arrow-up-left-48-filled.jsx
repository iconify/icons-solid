import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.exytv1xbl {
  fill: currentColor;
  d: path("M25.5 6a1.5 1.5 0 0 1 0 3H11.121l30.44 30.44a1.5 1.5 0 0 1-2.122 2.12L9 11.122V25.5a1.5 1.5 0 0 1-3 0v-18A1.5 1.5 0 0 1 7.5 6z");
}
</style><path class="exytv1xbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-left-48-filled"} {...others} />);
}

export default Component;
