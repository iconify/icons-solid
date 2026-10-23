import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gahn9tbab.css';
import '../../css/r/rpqiizbbq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gahn9tbab"/><path class="rpqiizbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brain-off-filled"} {...others} />);
}

export default Component;
