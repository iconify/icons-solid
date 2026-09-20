import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqup61b4d.css';
import '../../css/r/rr671wplb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oqup61b4d"/><path class="rr671wplb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-sass"} {...others} />);
}

export default Component;
