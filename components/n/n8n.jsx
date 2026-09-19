import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we_pl-mkf.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="we_pl-mkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:n8n"} {...others} />);
}

export default Component;
