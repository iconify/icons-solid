import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4jq1x2sk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y4jq1x2sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-right-from-left-bracket"} {...others} />);
}

export default Component;
