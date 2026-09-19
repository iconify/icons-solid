import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pltis2bxu.css';
import '../../css/m/md286fbip.css';
import '../../css/x/xwvba7bli.css';
import '../../css/b/b88gxdbzy.css';
import '../../css/n/nffljcb4c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="pltis2bxu"/><g class="md286fbip"><path class="xwvba7bli"/><path class="b88gxdbzy"/><path class="nffljcb4c"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:tpay"} {...others} />);
}

export default Component;
