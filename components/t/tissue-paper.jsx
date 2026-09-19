import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rhzqnybfy.css';
import '../../css/x/xwt_qrbis.css';
import '../../css/v/vhzi37bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rhzqnybfy"/><path class="xwt_qrbis"/><path class="vhzi37bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tissue-paper"} {...others} />);
}

export default Component;
