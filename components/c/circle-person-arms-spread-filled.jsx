import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wysaowb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wysaowb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-person-arms-spread-filled"} {...others} />);
}

export default Component;
