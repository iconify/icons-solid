import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xvnj0r4bn {
  fill: currentColor;
  d: path("M11.5 14.692h1V9.308h-1zm2.808 0h.884v-2h3.5V9.308h-4.384zm-9 0h4.384v-3.134h-3.5v-1.366h3.5v-.884H5.308v3.134h3.5v1.366h-3.5zm9.884-2.884v-1.616h2.616v1.616zM3 19V5h18v14z");
}
</style><path class="xvnj0r4bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sip-sharp"} {...others} />);
}

export default Component;
