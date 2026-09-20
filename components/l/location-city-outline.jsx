import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q3o9r30ch {
  fill: currentColor;
  d: path("M5.039 20.154v-13H9.5v-3.27L12 1.5l2.5 2.385v7.269h4.462v9zm1-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4.461 8h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4.462 12h3v-3h-3zm0-4h3v-3h-3z");
}
</style><path class="q3o9r30ch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:location-city-outline"} {...others} />);
}

export default Component;
