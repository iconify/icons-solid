import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7__prbvz.css';
import '../../css/v/vykt_qbyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7__prbvz"/><path clip-rule="evenodd" class="vykt_qbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-search-2-filled"} {...others} />);
}

export default Component;
