import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ruy7jzbjh {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3H9v18H6.25A3.25 3.25 0 0 1 3 17.75zM10.5 21h7.25A3.25 3.25 0 0 0 21 17.75V15.5H10.5zM21 14V6.25A3.25 3.25 0 0 0 17.75 3H10.5v11z");
}
</style><path class="ruy7jzbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-treemap-24-filled"} {...others} />);
}

export default Component;
