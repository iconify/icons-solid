import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7-c3zb9h.css';
import '../../css/m/mexy6lbof.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v7-c3zb9h"/><path class="mexy6lbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-gradle"} {...others} />);
}

export default Component;
