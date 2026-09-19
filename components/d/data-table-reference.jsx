import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz3unxo7b.css';
import '../../css/c/cgvyvxz3v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iz3unxo7b"/><path class="cgvyvxz3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-table-reference"} {...others} />);
}

export default Component;
