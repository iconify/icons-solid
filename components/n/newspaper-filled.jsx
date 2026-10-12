import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr46c6bmn.css';
import '../../css/v/v5th-uitq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tr46c6bmn"/><path clip-rule="evenodd" class="v5th-uitq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:newspaper-filled"} {...others} />);
}

export default Component;
