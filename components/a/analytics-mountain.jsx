import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwug8ib1k.css';
import '../../css/y/yylioebcl.css';
import '../../css/a/aqcw25b9i.css';
import '../../css/y/yneii_-je.css';
import '../../css/d/dwlvr-b1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qwug8ib1k"/><path class="yylioebcl"/><path class="aqcw25b9i"/><path class="yneii_-je"/><path class="dwlvr-b1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:analytics-mountain"} {...others} />);
}

export default Component;
