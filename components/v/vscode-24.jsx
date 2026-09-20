import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvvy4hbru.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qvvy4hbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:vscode-24"} {...others} />);
}

export default Component;
