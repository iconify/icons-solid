import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndk-6c8er.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ndk-6c8er"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-tree-small"} {...others} />);
}

export default Component;
