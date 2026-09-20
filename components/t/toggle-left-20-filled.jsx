import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.o7ik_yyie {
  fill: currentColor;
  d: path("M14 6a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8zm-8 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="o7ik_yyie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toggle-left-20-filled"} {...others} />);
}

export default Component;
