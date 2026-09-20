import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ykfixzbiu {
  fill: currentColor;
  d: path("M18.25 6A2.25 2.25 0 0 0 16 8.25V16H8.25A2.25 2.25 0 0 0 6 18.25v11.5A2.25 2.25 0 0 0 8.25 32H16v7.75A2.25 2.25 0 0 0 18.25 42h11.5A2.25 2.25 0 0 0 32 39.75V32h7.75A2.25 2.25 0 0 0 42 29.75v-11.5A2.25 2.25 0 0 0 39.75 16H32V8.25A2.25 2.25 0 0 0 29.75 6z");
}
</style><path class="ykfixzbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:doctor-48-filled"} {...others} />);
}

export default Component;
