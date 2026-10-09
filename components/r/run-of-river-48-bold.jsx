import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q40h8-b-p.css';
import '../../css/w/wu_emw7zr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q40h8-b-p"/><path class="wu_emw7zr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:run-of-river-48-bold"} {...others} />);
}

export default Component;
