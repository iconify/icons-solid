import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrjl63ncj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nrjl63ncj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:toggle-outline"} {...others} />);
}

export default Component;
