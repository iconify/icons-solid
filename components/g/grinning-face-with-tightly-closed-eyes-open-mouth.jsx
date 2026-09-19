import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/d/dg3mn7bsj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGj5QrybRn"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="dg3mn7bsj"/></g></mask></defs><path mask="url(#SVGj5QrybRn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:grinning-face-with-tightly-closed-eyes-open-mouth"} {...others} />);
}

export default Component;
