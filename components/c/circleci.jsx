import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr_qps3yf.css';
import '../../css/e/ey6kym17a.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="cr_qps3yf"/><path class="ey6kym17a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:circleci"} {...others} />);
}

export default Component;
