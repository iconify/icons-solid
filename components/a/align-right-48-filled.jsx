import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d_vxz9biz {
  fill: currentColor;
  d: path("M41.5 5.25a1.25 1.25 0 1 0-2.5 0v37.5a1.25 1.25 0 1 0 2.5 0zM32.25 26a4.25 4.25 0 0 1 4.25 4.25v5.5A4.25 4.25 0 0 1 32.25 40h-15A4.25 4.25 0 0 1 13 35.75v-5.5A4.25 4.25 0 0 1 17.25 26zm4.25-13.75v5.5A4.25 4.25 0 0 1 32.25 22H10a4.25 4.25 0 0 1-4.25-4.25v-5.5A4.25 4.25 0 0 1 10 8h22.25a4.25 4.25 0 0 1 4.25 4.25");
}
</style><path class="d_vxz9biz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:align-right-48-filled"} {...others} />);
}

export default Component;
