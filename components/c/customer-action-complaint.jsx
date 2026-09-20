import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w3e42mbmi.css';
import '../../css/w/w0ndlmbhz.css';
import '../../css/q/qumgbghqq.css';
import '../../css/y/yvbrc32hp.css';
import '../../css/r/ra90swbab.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w3e42mbmi"/><path class="w0ndlmbhz"/><path class="qumgbghqq"/><path class="yvbrc32hp"/><path class="ra90swbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:customer-action-complaint"} {...others} />);
}

export default Component;
