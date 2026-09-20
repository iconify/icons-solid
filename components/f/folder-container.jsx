import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhg495fle.css';
import '../../css/p/piqqc9fqh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nhg495fle"/><path class="piqqc9fqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-container"} {...others} />);
}

export default Component;
