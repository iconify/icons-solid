import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3op2qbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w3op2qbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:deepfake-technology-2-solid"} {...others} />);
}

export default Component;
