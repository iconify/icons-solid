import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzh5w72co.css';
import '../../css/k/kgcox8b6d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tzh5w72co"/><path class="kgcox8b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-ios-open"} {...others} />);
}

export default Component;
