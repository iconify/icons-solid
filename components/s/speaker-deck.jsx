import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc-qm3iru.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tc-qm3iru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:speaker-deck"} {...others} />);
}

export default Component;
