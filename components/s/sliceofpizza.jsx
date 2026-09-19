import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgy69obha.css';
import '../../css/c/ct6r-etpu.css';
import '../../css/x/xazkdubej.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jgy69obha"/><path class="ct6r-etpu"/><path class="xazkdubej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sliceofpizza"} {...others} />);
}

export default Component;
