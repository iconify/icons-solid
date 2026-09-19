import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/u/u6df5xh0x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaHcRUcLK"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="u6df5xh0x"/></g></mask></defs><path mask="url(#SVGaHcRUcLK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:frowning-face-whit-open-mouth"} {...others} />);
}

export default Component;
