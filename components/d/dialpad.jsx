import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsp-l3m4u.css';

const viewBox = {"width":957,"height":1024};
const content = `<path class="lsp-l3m4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:dialpad"} {...others} />);
}

export default Component;
