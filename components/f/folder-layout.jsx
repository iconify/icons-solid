import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl0qbld8c.css';
import '../../css/o/oytr_p5za.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sl0qbld8c"/><path class="oytr_p5za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-layout"} {...others} />);
}

export default Component;
