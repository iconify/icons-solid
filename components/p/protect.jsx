import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qvlv7ibpn.css';
import '../../css/o/o077bkjlw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpRpbUcuZ"><g class="ufeehvblu"><path class="qvlv7ibpn"/><path class="o077bkjlw"/></g></mask></defs><path mask="url(#SVGpRpbUcuZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:protect"} {...others} />);
}

export default Component;
