import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/o/of0pntlrh.css';
import '../../css/u/us-43-0od.css';
import '../../css/x/x3o8e895h.css';
import '../../css/b/bl4gd2e5a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="of0pntlrh"/><path class="us-43-0od"/><ellipse transform="rotate(-45 14 14)" class="x3o8e895h"/><ellipse transform="rotate(-45 38 38)" class="bl4gd2e5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:goblet-one"} {...others} />);
}

export default Component;
