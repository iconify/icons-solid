import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r2mt24avt {
  fill: currentColor;
  d: path("M13.923 18.616q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.229t-.54.23t-.23.54q0 .309.23.539t.54.23m2.923 0q.31 0 .54-.23t.23-.54t-.23-.54q-.23-.229-.54-.229t-.54.23t-.229.54t.23.539t.54.23M4 13.5V3h16v10.5h-1V4H5v9.5zm1 1V20h14v-5.5zM4 21v-7.5h16V21zm1-7.5h14zm0 1h14z");
}
</style><path class="r2mt24avt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:hard-drive-2-outline-sharp"} {...others} />);
}

export default Component;
