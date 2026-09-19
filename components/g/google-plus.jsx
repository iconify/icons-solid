import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho70dnpkk.css';

const viewBox = {"width":740,"height":840};
const content = `<path class="ho70dnpkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:google-plus"} {...others} />);
}

export default Component;
