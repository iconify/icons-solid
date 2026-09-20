import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lvncho9ik.css';
import '../../css/e/ecwwq9bnp.css';
import '../../css/s/scrh2muys.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lvncho9ik"/><path class="ecwwq9bnp"/><path class="scrh2muys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:modern-payment-desktop-transaction"} {...others} />);
}

export default Component;
