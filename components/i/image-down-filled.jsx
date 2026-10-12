import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6e9n0bgt.css';
import '../../css/q/qcetc5ipd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x6e9n0bgt"/><path clip-rule="evenodd" class="qcetc5ipd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:image-down-filled"} {...others} />);
}

export default Component;
