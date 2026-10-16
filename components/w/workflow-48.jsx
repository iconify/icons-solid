import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntf6lmu1o.css';
import '../../css/z/zo2elrbyg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ntf6lmu1o"/><path class="zo2elrbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:workflow-48"} {...others} />);
}

export default Component;
