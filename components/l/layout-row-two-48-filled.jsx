import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.um6w65bpo {
  fill: currentColor;
  d: path("M12.25 6A6.25 6.25 0 0 0 6 12.25v10.5h36v-10.5A6.25 6.25 0 0 0 35.75 6zM42 25.25H6v10.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75z");
}
</style><path class="um6w65bpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-two-48-filled"} {...others} />);
}

export default Component;
