import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dypv3-mdc.css';
import '../../css/l/lu-es3w6h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dypv3-mdc"/><path class="lu-es3w6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-github"} {...others} />);
}

export default Component;
