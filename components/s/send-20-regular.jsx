import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.obhdbbcdk {
  fill: currentColor;
  d: path("M2.184 2.112a.5.5 0 0 1 .54-.06l15 7.5a.5.5 0 0 1 0 .895l-15 7.5a.5.5 0 0 1-.707-.576L3.983 10L2.017 2.629a.5.5 0 0 1 .167-.517m2.7 8.388L3.27 16.556L16.382 10L3.269 3.444L4.884 9.5H11.5a.5.5 0 1 1 0 1z");
}
</style><path class="obhdbbcdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:send-20-regular"} {...others} />);
}

export default Component;
