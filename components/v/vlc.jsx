import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i186x-vtx.css';
import '../../css/i/ivau6ccrv.css';
import '../../css/v/vjtndybvi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i186x-vtx"/><path class="ivau6ccrv"/><path class="vjtndybvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:vlc"} {...others} />);
}

export default Component;
