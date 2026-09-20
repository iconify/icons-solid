import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phu1k1bve.css';
import '../../css/g/gpf9kny_g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="phu1k1bve"/><path class="gpf9kny_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-vscode"} {...others} />);
}

export default Component;
