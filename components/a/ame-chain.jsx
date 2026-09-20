import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c1zfyqf2c.css';
import '../../css/j/jwbsqab5o.css';
import '../../css/o/oe4-mbpxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c1zfyqf2c"/><path class="jwbsqab5o"/><path class="oe4-mbpxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ame-chain"} {...others} />);
}

export default Component;
