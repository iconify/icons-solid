import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvc0w3uso.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="dvc0w3uso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:scanner-bar-code-remix"} {...others} />);
}

export default Component;
