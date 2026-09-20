import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yd44w6bte {
  fill: currentColor;
  d: path("M13 7.5a1.5 1.5 0 0 0-3 0v18a7.5 7.5 0 0 0 7.5 7.5h17.379l-6.44 6.44a1.5 1.5 0 0 0 2.122 2.12l9-9a1.5 1.5 0 0 0 0-2.12l-9-9a1.5 1.5 0 0 0-2.122 2.12L34.88 30H17.5a4.5 4.5 0 0 1-4.5-4.5z");
}
</style><path class="yd44w6bte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-turn-down-right-48-filled"} {...others} />);
}

export default Component;
