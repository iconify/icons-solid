import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4awffbex.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="b4awffbex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:markdown-document-programming-remix"} {...others} />);
}

export default Component;
