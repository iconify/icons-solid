import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wve-dxbgv.css';
import '../../css/k/kgcox8b6d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wve-dxbgv"/><path class="kgcox8b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-ios"} {...others} />);
}

export default Component;
