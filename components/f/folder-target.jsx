import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dypv3-mdc.css';
import '../../css/e/eozy0wknl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dypv3-mdc"/><path class="eozy0wknl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-target"} {...others} />);
}

export default Component;
