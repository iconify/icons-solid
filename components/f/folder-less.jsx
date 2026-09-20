import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcjmcxbsc.css';
import '../../css/m/m_0djgu3d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hcjmcxbsc"/><path class="m_0djgu3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-less"} {...others} />);
}

export default Component;
