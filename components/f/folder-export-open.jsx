import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb8w2y-mu.css';
import '../../css/n/nra3bcbud.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sb8w2y-mu"/><path class="nra3bcbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-export-open"} {...others} />);
}

export default Component;
