import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjdu4dbzy.css';
import '../../css/d/djhyfvqnr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pjdu4dbzy"/><path class="djhyfvqnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-pen-48-bold"} {...others} />);
}

export default Component;
