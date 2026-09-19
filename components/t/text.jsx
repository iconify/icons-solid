import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr0u-obfa.css';
import '../../css/q/qoypj_b7u.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="mr0u-obfa"/><path class="qoypj_b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:text"} {...others} />);
}

export default Component;
