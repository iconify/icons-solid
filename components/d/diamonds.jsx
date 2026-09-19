import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/svg23iagb.css';
import '../../css/v/vupjyybzv.css';
import '../../css/r/r8mcvnbot.css';
import '../../css/v/vsob5ac3n.css';
import '../../css/g/gbtnm02ok.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="svg23iagb"/><path class="vupjyybzv"/><path class="r8mcvnbot"/><path class="vsob5ac3n"/><path class="gbtnm02ok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:diamonds"} {...others} />);
}

export default Component;
