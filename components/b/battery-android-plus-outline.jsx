import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m3ul_v_oz {
  fill: currentColor;
  d: path("M3 16V8zm1.385 1q-.994 0-1.69-.695T2 14.615v-5.23q0-.994.696-1.69T4.385 7h11.73v1H4.386q-.589 0-.987.398T3 9.385v5.23q0 .589.398.987t.986.398h11.732v1zM18.5 15.5v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="m3ul_v_oz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-android-plus-outline"} {...others} />);
}

export default Component;
