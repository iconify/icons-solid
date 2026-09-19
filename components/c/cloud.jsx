import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpiu6lnbs.css';

const viewBox = {"width":730,"height":710};
const content = `<path class="mpiu6lnbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:cloud"} {...others} />);
}

export default Component;
