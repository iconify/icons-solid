import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk-_uab5y.css';
import '../../css/q/qg31fgbey.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xk-_uab5y"/><circle class="qg31fgbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:obelisk"} {...others} />);
}

export default Component;
