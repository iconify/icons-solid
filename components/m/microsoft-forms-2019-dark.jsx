import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an70hubtx.css';
import '../../css/o/o4h750biq.css';
import '../../css/k/k5yy91bgj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="an70hubtx"/><path class="o4h750biq"/><path class="k5yy91bgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-forms-2019-dark"} {...others} />);
}

export default Component;
