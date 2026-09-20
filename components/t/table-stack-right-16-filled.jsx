import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.amifz9-jo {
  fill: currentColor;
  d: path("M14 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zM10 11v2.5a.5.5 0 0 1-.5.5H6v-3zm0-1V6H6v4zM6 2h3.5a.5.5 0 0 1 .5.5V5H6zM5 5V2h-.5A2.5 2.5 0 0 0 2 4.5V5zM2 6v4h3V6zm0 5.5V11h3v3h-.5A2.5 2.5 0 0 1 2 11.5");
}
</style><path class="amifz9-jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-stack-right-16-filled"} {...others} />);
}

export default Component;
