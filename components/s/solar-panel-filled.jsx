import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy00zfmuk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xy00zfmuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:solar-panel-filled"} {...others} />);
}

export default Component;
