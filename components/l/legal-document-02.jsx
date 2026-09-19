import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p4nocrihx.css';
import '../../css/i/ig61lkb8h.css';
import '../../css/p/pqdm8be3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p4nocrihx"/><path class="ig61lkb8h"/><path class="pqdm8be3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:legal-document-02"} {...others} />);
}

export default Component;
