import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob_nbubvj.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/q/qaq-ndbwn.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="ob_nbubvj"/><circle class="e39ud6bwf"/><path class="qaq-ndbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:kubernetes-ip-address"} {...others} />);
}

export default Component;
