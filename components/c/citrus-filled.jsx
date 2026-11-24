import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekvvvesqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ekvvvesqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:citrus-filled"} {...others} />);
}

export default Component;
