import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.rtokrlbvy {
  fill: currentColor;
  d: path("M15.5 7a2.5 2.5 0 0 1 2.494 2.336L18 9.5v6a2.5 2.5 0 0 1-2.336 2.494L15.5 18h-6a2.5 2.5 0 0 1-2.495-2.336L7 15.5v-6a2.5 2.5 0 0 1 2.336-2.495L9.5 7zm0 1h-6a1.5 1.5 0 0 0-1.493 1.356L8 9.5v6a1.5 1.5 0 0 0 1.356 1.493L9.5 17h6a1.5 1.5 0 0 0 1.493-1.356L17 15.5v-6a1.5 1.5 0 0 0-1.356-1.493zm-2.838-4.305l.048.157L13.285 6h-1.036l-.505-1.889a1.5 1.5 0 0 0-1.696-1.091l-.141.03L4.11 4.604A1.5 1.5 0 0 0 3.02 6.3l.03.142l1.554 5.795A1.5 1.5 0 0 0 6 13.347v1a2.5 2.5 0 0 1-2.31-1.682l-.052-.17l-1.553-5.796a2.5 2.5 0 0 1 1.61-3.014l.158-.047l5.795-1.553a2.5 2.5 0 0 1 2.957 1.458z");
}
</style><path class="rtokrlbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:collections-empty-20-regular"} {...others} />);
}

export default Component;
