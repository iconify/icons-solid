import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4yqyt6tg.css';
import '../../css/n/nnl6f83rm.css';

const viewBox = {"width":18,"height":24};
const content = `<path class="e4yqyt6tg"/><path class="nnl6f83rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:jira"} {...others} />);
}

export default Component;
