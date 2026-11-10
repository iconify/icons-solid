import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ek75b5bcn.css';
import '../../css/h/h6n7m_bjv.css';
import '../../css/u/unaw5kbcb.css';
import '../../css/v/vm305za0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ek75b5bcn"/><path class="h6n7m_bjv"/><path class="unaw5kbcb"/><path class="vm305za0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-cube"} {...others} />);
}

export default Component;
