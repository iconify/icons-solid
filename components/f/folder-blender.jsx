import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbnjf8b6m.css';
import '../../css/h/hnt_a_4dv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fbnjf8b6m"/><path class="hnt_a_4dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-blender"} {...others} />);
}

export default Component;
