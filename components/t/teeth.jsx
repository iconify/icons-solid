import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qc8f2l-vm.css';
import '../../css/q/qwn1-w04t.css';
import '../../css/j/jzg1emfae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qc8f2l-vm"/><path class="qwn1-w04t"/><path class="jzg1emfae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:teeth"} {...others} />);
}

export default Component;
