import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwd09ej6l.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="kwd09ej6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:text-file-remix"} {...others} />);
}

export default Component;
