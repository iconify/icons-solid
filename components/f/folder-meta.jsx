import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5evchskr.css';
import '../../css/n/ns67zpbzp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a5evchskr"/><path class="ns67zpbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-meta"} {...others} />);
}

export default Component;
