import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eke7tccoi.css';
import '../../css/p/p8coosbkx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eke7tccoi"/><path class="p8coosbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:credit-card-check-filled"} {...others} />);
}

export default Component;
