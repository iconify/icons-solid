import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z317gjqgd.css';
import '../../css/f/ftpvooboq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z317gjqgd"/><path clip-rule="evenodd" class="ftpvooboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cinema-filled"} {...others} />);
}

export default Component;
