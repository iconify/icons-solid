import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-td7-p-y.css';
import '../../css/i/iz42m8brh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q-td7-p-y"/><path class="iz42m8brh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-appwrite-open"} {...others} />);
}

export default Component;
