import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubzx9fbaa.css';
import '../../css/d/dlqc4jbur.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ubzx9fbaa"/><path class="dlqc4jbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:unread-16"} {...others} />);
}

export default Component;
