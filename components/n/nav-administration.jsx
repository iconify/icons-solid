import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-da5wbxh.css';
import '../../css/h/h1p0vrb0a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="n-da5wbxh"/><path clip-rule="evenodd" class="h1p0vrb0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:nav-administration"} {...others} />);
}

export default Component;
