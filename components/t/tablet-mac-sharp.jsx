import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hz0p_mbcs {
  fill: currentColor;
  d: path("M4 22V2h16v20zm1-5.462h14V5.5H5zm7.54 3.27q.23-.23.23-.539t-.23-.54q-.23-.229-.54-.229t-.54.23t-.23.54t.23.539t.54.23t.54-.23");
}
</style><path class="hz0p_mbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tablet-mac-sharp"} {...others} />);
}

export default Component;
