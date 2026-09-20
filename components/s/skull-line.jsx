import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a86yqyqva.css';
import '../../css/c/cbpc6zbgf.css';
import '../../css/w/w6crmdb4u.css';
import '../../css/m/m5eds2f1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a86yqyqva"/><circle class="cbpc6zbgf"/><path class="w6crmdb4u"/><circle class="m5eds2f1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:skull-line"} {...others} />);
}

export default Component;
