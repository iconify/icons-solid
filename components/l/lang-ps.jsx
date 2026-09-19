import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mtkf9iklb.css';
import '../../css/w/wwuicc8rx.css';
import '../../css/z/z582hazjs.css';
import '../../css/c/cibj5pwcl.css';
import '../../css/t/tjy7v5buh.css';
import '../../css/q/qp-q6vbmx.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="mtkf9iklb"/><path class="wwuicc8rx"/><path class="z582hazjs"/><g class="cibj5pwcl"><path class="tjy7v5buh"/><path class="qp-q6vbmx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-ps"} {...others} />);
}

export default Component;
