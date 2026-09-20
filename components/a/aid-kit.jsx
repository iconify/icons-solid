import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/z/zlxl1cb8m.css';
import '../../css/d/dx7buvimn.css';
import '../../css/o/o52hyzbpv.css';
import '../../css/a/at8dlnl-b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="zlxl1cb8m"/><path class="dx7buvimn"/><path class="o52hyzbpv"/><path class="at8dlnl-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:aid-kit"} {...others} />);
}

export default Component;
