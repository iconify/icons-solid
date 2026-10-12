import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6l54sb0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z6l54sb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:receipt-turkish-lira-filled"} {...others} />);
}

export default Component;
