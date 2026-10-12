import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u90t3vbul.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u90t3vbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calculator-filled"} {...others} />);
}

export default Component;
