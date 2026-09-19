import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgaqpcbiz.css';
import '../../css/l/lcaoj-wbf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cgaqpcbiz"/><path class="lcaoj-wbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:folder"} {...others} />);
}

export default Component;
