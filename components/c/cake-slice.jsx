import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbsnqqbel.css';
import '../../css/d/dwo_--a8w.css';
import '../../css/g/gxic06lfc.css';
import '../../css/i/ixiz7obtb.css';
import '../../css/o/omr6hacch.css';
import '../../css/v/v78vyiifn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rbsnqqbel"/><path class="dwo_--a8w"/><path class="gxic06lfc"/><path class="ixiz7obtb"/><path class="omr6hacch"/><path class="v78vyiifn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:cake-slice"} {...others} />);
}

export default Component;
