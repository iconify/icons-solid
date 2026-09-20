import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tvalyqwag {
  fill: currentColor;
  d: path("M5.346 19.5v-7.115h-2v-1h5v1h-2V19.5zm0-10.885V4.5h1v4.116zm4.154 0v-1h2V4.5h1v3.116h2v1zm2 10.885v-8.115h1V19.5zm6.154 0v-3.116h-2v-1h5v1h-2V19.5zm0-6.884V4.5h1v8.116z");
}
</style><path class="tvalyqwag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:instant-mix"} {...others} />);
}

export default Component;
