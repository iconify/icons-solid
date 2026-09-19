import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf_ub3bqf.css';
import '../../css/r/riavwwb-b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cf_ub3bqf"/><path class="riavwwb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ai-business-impact-assessment"} {...others} />);
}

export default Component;
