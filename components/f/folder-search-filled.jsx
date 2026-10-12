import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpzeqkffn.css';
import '../../css/s/s7rh6qv0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gpzeqkffn"/><path class="s7rh6qv0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-search-filled"} {...others} />);
}

export default Component;
