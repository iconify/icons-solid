import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veqz34bjq.css';
import '../../css/a/am9dy-_0b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ouiIcon__fillSecondary veqz34bjq"/><path class="am9dy-_0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-graph"} {...others} />);
}

export default Component;
