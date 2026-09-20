import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kkjfkibmc {
  fill: currentColor;
  d: path("m16.75 8.412l24.417 12.705a3.25 3.25 0 0 1 0 5.766L16.75 39.588A3.25 3.25 0 0 1 12 36.705v-25.41a3.25 3.25 0 0 1 4.549-2.98zm-1.154 2.218l-.11-.047a.75.75 0 0 0-.986.712v25.41a.75.75 0 0 0 1.096.665l24.417-12.705a.75.75 0 0 0 0-1.33z");
}
</style><path class="kkjfkibmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:play-48-regular"} {...others} />);
}

export default Component;
