import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3wiavcio.css';
import '../../css/b/bno5nxbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3wiavcio"/><path clip-rule="evenodd" class="bno5nxbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-search-filled"} {...others} />);
}

export default Component;
