import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vzrx6gb8o {
  fill: currentColor;
  d: path("M2 4v16h20V4zm18 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z");
}
</style><path class="vzrx6gb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-terminal"} {...others} />);
}

export default Component;
