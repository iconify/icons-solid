import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnu5vacfx.css';
import '../../css/q/qcetc5ipd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vnu5vacfx"/><path clip-rule="evenodd" class="qcetc5ipd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:image-up-filled"} {...others} />);
}

export default Component;
