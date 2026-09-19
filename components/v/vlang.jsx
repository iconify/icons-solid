import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5o67xb4n.css';
import '../../css/v/vclaoe-gr.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="v5o67xb4n"/><path class="vclaoe-gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vlang"} {...others} />);
}

export default Component;
