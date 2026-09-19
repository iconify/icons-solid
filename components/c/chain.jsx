import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rcnka6jzk.css';
import '../../css/m/md286fbip.css';
import '../../css/u/uqfwj2bsy.css';
import '../../css/k/kycke37ds.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="rcnka6jzk"/><g class="md286fbip"><path class="uqfwj2bsy"/><path class="kycke37ds"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:chain"} {...others} />);
}

export default Component;
