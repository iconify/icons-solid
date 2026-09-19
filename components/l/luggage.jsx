import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/c/czchipbwl.css';
import '../../css/x/x1-dxmbqa.css';
import '../../css/y/yky2hkgqf.css';
import '../../css/o/olxsqfs-r.css';
import '../../css/q/qgh0lfbey.css';
import '../../css/i/ivoocciuy.css';
import '../../css/s/szz4rup8h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="czchipbwl"/><path class="x1-dxmbqa"/><path class="yky2hkgqf"/><path class="olxsqfs-r"/><path class="qgh0lfbey"/><path class="ivoocciuy"/><path class="szz4rup8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:luggage"} {...others} />);
}

export default Component;
