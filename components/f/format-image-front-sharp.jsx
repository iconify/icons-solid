import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m_46d465c {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-3.75v-1h1.866v1zm3.75 0v-8.5h8.5v8.5zm10.385 0v-1H20v1zM4 12.5v-1h1.866v1zm14.135 0v-1H20v1zM4 8.75v-1h1.866v1zm14.135 0v-1H20v1zM4 5V4h16v1z");
}
</style><path class="m_46d465c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:format-image-front-sharp"} {...others} />);
}

export default Component;
