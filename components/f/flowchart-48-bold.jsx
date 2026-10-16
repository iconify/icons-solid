import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iehgmbc0b.css';
import '../../css/x/x2zs-zbqv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iehgmbc0b"/><path class="x2zs-zbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flowchart-48-bold"} {...others} />);
}

export default Component;
