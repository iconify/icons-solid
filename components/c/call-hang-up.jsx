import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/n/nk5y3tbyy.css';
import '../../css/w/wq7blbcae.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="nk5y3tbyy"/><path class="wq7blbcae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:call-hang-up"} {...others} />);
}

export default Component;
