import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lyvb5g3tc.css';
import '../../css/p/p4hvhac_x.css';
import '../../css/o/o6lexionm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPF5ztdPr"><g class="wwvp95byt"><path class="lyvb5g3tc"/><path class="p4hvhac_x"/><path class="o6lexionm"/></g></mask></defs><path mask="url(#SVGPF5ztdPr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:badge-two"} {...others} />);
}

export default Component;
