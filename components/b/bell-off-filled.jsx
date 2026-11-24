import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0mkieb9c.css';
import '../../css/f/fccyhtt-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o0mkieb9c"/><path class="fccyhtt-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bell-off-filled"} {...others} />);
}

export default Component;
