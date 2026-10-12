import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3qof8bab.css';
import '../../css/t/tbf2vectn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3qof8bab"/><path clip-rule="evenodd" class="tbf2vectn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:banknote-x-filled"} {...others} />);
}

export default Component;
