import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jw36gweln {
  fill: currentColor;
  d: path("M8.308 17.692h.884v-2h2v-.884h-2v-2h-.884v2h-2v.884h2zm5-.75h4.384v-.884h-4.384zm0-2.5h4.384v-.884h-4.384zm-6.75-5.55h4.384v-.884H6.558zM4 20V4h16v16zm1-1h14V5H5zm0 0V5zm9.1-8.511l1.4-1.4l1.4 1.4l.627-.628l-1.4-1.411l1.4-1.4l-.627-.627l-1.4 1.4l-1.4-1.4l-.627.627l1.4 1.4l-1.4 1.412z");
}
</style><path class="jw36gweln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:calculate-outline-sharp"} {...others} />);
}

export default Component;
