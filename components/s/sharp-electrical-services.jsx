import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0xzsvhxu {
  fill: currentColor;
  d: path("M5 11h7V4H4v2h6v3H3v8h6v-2H5zm13 6h3v2h-3z");
}

.q83kd7j8c {
  fill: currentColor;
  d: path("M18 13h3v2h-3zm-6-1v2h-2v4h2v2h5v-8z");
}
</style><path class="q83kd7j8c"/><path class="c0xzsvhxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-electrical-services"} {...others} />);
}

export default Component;
