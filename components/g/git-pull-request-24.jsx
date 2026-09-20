import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajh12op2y.css';
import '../../css/q/qtmpeuosr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ajh12op2y"/><path class="qtmpeuosr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-pull-request-24"} {...others} />);
}

export default Component;
