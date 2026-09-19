import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/x6q0du3xx.css';
import '../../css/i/io590qi1v.css';
import '../../css/y/yiugx4bbn.css';
import '../../css/q/qfm_c3nif.css';
import '../../css/q/qdh30w61w.css';
import '../../css/u/ulk40-gxl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4KaIBbfj"><g class="aql7dnt-u"><path class="x6q0du3xx"/><path class="io590qi1v"/><circle class="yiugx4bbn"/><circle class="qfm_c3nif"/><path class="qdh30w61w"/><path class="ulk40-gxl"/></g></mask></defs><path mask="url(#SVG4KaIBbfj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:boy-stroller"} {...others} />);
}

export default Component;
