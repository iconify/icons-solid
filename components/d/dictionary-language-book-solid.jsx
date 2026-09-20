import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gir5-qiqe.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="gir5-qiqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:dictionary-language-book-solid"} {...others} />);
}

export default Component;
