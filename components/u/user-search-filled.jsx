import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpzeqkffn.css';
import '../../css/m/mzf3t7bji.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gpzeqkffn"/><path class="mzf3t7bji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-search-filled"} {...others} />);
}

export default Component;
