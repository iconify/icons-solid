import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq9yo4btm.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="eq9yo4btm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:github-stroke-12"} {...others} />);
}

export default Component;
