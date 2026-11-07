import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9bla539y.css';
import '../../css/q/qbfdzwb5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s9bla539y"/><path class="qbfdzwb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-down-to-line-outline"} {...others} />);
}

export default Component;
