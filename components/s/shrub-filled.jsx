import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pizh2f-zy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pizh2f-zy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shrub-filled"} {...others} />);
}

export default Component;
