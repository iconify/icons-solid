import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az1yykywn.css';
import '../../css/q/qsakwingg.css';
import '../../css/e/etpvzsbbj.css';
import '../../css/t/ta7lxibnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="az1yykywn"/><path class="qsakwingg"/><path class="etpvzsbbj"/><path class="ta7lxibnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:soph"} {...others} />);
}

export default Component;
