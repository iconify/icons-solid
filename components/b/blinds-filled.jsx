import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stdr-7bvd.css';
import '../../css/z/zt9l85bje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="stdr-7bvd"/><path class="zt9l85bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:blinds-filled"} {...others} />);
}

export default Component;
