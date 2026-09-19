import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a025csbqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path xmlns="http://www.w3.org/2000/svg" class="a025csbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:genai"} {...others} />);
}

export default Component;
