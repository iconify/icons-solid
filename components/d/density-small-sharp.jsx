import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.csb4zpv7z {
  fill: currentColor;
  d: path("M4 21v-1h16v1zm0-5.5v-1h16v1zm0-6v-1h16v1zM4 4V3h16v1z");
}
</style><path class="csb4zpv7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:density-small-sharp"} {...others} />);
}

export default Component;
