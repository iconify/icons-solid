import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri15mwhnp.css';
import '../../css/q/qjx3e9jap.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ri15mwhnp"/><path class="qjx3e9jap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:our-shopping-list-dark"} {...others} />);
}

export default Component;
