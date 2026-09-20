import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5fxn4-5j.css';
import '../../css/r/ryg6a4aqs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i5fxn4-5j"/><path class="ryg6a4aqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-tools"} {...others} />);
}

export default Component;
