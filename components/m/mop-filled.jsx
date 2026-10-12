import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv2c6vbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qv2c6vbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mop-filled"} {...others} />);
}

export default Component;
