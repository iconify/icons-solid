import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ft06h7b8o.css';
import '../../css/p/peznpibsk.css';
import '../../css/i/itmriibio.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcRUh3dAZ"><g class="ft5dv1b6b"><path class="ft06h7b8o"/><path class="peznpibsk"/><path class="itmriibio"/></g></mask></defs><path mask="url(#SVGcRUh3dAZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hotel-please-clean"} {...others} />);
}

export default Component;
