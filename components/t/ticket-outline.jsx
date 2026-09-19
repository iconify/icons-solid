import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pfvmrrbrb.css';
import '../../css/f/fnh1hbb7b.css';
import '../../css/f/f1ot_mbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ticket-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="pfvmrrbrb"/><path clip-rule="evenodd" class="fnh1hbb7b"/><path class="f1ot_mbyf"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:ticket-outline"} {...others} />);
}

export default Component;
