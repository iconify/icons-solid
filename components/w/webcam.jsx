import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bge4e0m_e.css';
import '../../css/d/d9_tw6tfv.css';
import '../../css/r/rsvuxndka.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuvsWselU"><g class="ufeehvblu"><path class="bge4e0m_e"/><path class="d9_tw6tfv"/><path class="rsvuxndka"/></g></mask></defs><path mask="url(#SVGuvsWselU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:webcam"} {...others} />);
}

export default Component;
