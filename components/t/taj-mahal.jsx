import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/htar11g4r.css';
import '../../css/w/wnejnnbxb.css';
import '../../css/m/mghzbn9zx.css';
import '../../css/k/kic0aypfs.css';
import '../../css/y/yrgd-bcij.css';
import '../../css/o/o-__bkbmt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGh8dXcRyb"><g class="s9cl3zbei"><path class="htar11g4r"/><path class="wnejnnbxb"/><path class="mghzbn9zx"/><path class="kic0aypfs"/><path class="yrgd-bcij"/><path class="o-__bkbmt"/></g></mask></defs><path mask="url(#SVGh8dXcRyb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:taj-mahal"} {...others} />);
}

export default Component;
