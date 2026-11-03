import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbnjf8b6m.css';
import '../../css/m/m6o8i28jv.css';
import '../../css/u/uyhftacbi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fbnjf8b6m"/><path class="m6o8i28jv"/><path class="uyhftacbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-bruno"} {...others} />);
}

export default Component;
