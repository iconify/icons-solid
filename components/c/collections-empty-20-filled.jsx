import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.rqgsa0kwl {
  fill: currentColor;
  d: path("M15.5 7a2.5 2.5 0 0 1 2.494 2.336L18 9.5v6a2.5 2.5 0 0 1-2.336 2.494L15.5 18h-6a2.5 2.5 0 0 1-2.495-2.336L7 15.5v-6a2.5 2.5 0 0 1 2.336-2.495L9.5 7zm-2.838-3.305l.048.157L13.285 6H9a3 3 0 0 0-2.995 2.824L6 9v5.348a2.5 2.5 0 0 1-2.31-1.683l-.052-.17l-1.553-5.796a2.5 2.5 0 0 1 1.61-3.014l.158-.047l5.795-1.553a2.5 2.5 0 0 1 2.957 1.458z");
}
</style><path class="rqgsa0kwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:collections-empty-20-filled"} {...others} />);
}

export default Component;
