import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kre4sgfqt.css';
import '../../css/g/g6wanyb_h.css';
import '../../css/z/zdeqsb64h.css';
import '../../css/q/qa728ubcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kre4sgfqt"/><path class="g6wanyb_h"/><circle class="zdeqsb64h"/><path class="qa728ubcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-key-2"} {...others} />);
}

export default Component;
