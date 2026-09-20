import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dypv3-mdc.css';
import '../../css/s/sga5kfb0i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dypv3-mdc"/><path class="sga5kfb0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-admin"} {...others} />);
}

export default Component;
