import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0prf1r2a.css';
import '../../css/r/rou0_mb0x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w0prf1r2a"/><path class="rou0_mb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-components"} {...others} />);
}

export default Component;
