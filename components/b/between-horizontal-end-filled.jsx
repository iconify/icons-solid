import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swzmu3awr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="swzmu3awr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:between-horizontal-end-filled"} {...others} />);
}

export default Component;
