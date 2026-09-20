import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/hb8yq8exw.css';
import '../../css/v/vwbxesc0s.css';
import '../../css/i/idbljabdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="hb8yq8exw"/><path class="vwbxesc0s"/><path class="idbljabdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:recycle-bin-2"} {...others} />);
}

export default Component;
