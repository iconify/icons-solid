import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.o-t_2gbvx {
  fill: currentColor;
  d: path("M17.5 15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zM15 5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z");
}
</style><path class="o-t_2gbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:laptop-20-filled"} {...others} />);
}

export default Component;
