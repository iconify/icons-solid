import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kzabpbcif.css';
import '../../css/m/mqi2acbsg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="kzabpbcif"/><path class="mqi2acbsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:steem"} {...others} />);
}

export default Component;
