import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajg2szb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ajg2szb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:captions-filled"} {...others} />);
}

export default Component;
