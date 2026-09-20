import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz37bn_-f.css';
import '../../css/e/ejvzpugwb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pz37bn_-f"/><path class="ejvzpugwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-src"} {...others} />);
}

export default Component;
