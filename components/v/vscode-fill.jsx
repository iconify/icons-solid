import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idi-7cb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="idi-7cb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:vscode-fill"} {...others} />);
}

export default Component;
