import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/ms9bbdb4v.css';
import '../../css/m/mw0sszb1l.css';
import '../../css/p/pocnsgb7q.css';
import '../../css/a/au3f3tbzj.css';
import '../../css/a/ayywjfbmn.css';
import '../../css/g/gx8p7h4bv.css';
import '../../css/m/m4dtvbyhp.css';
import '../../css/c/cnbc28bqs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ms9bbdb4v"/><path class="mw0sszb1l"/><path class="pocnsgb7q"/><path class="au3f3tbzj"/><path class="ayywjfbmn"/><path class="gx8p7h4bv"/><path class="m4dtvbyhp"/><path class="cnbc28bqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:widget"} {...others} />);
}

export default Component;
