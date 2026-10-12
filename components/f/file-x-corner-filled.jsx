import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fopn9jr3y.css';
import '../../css/a/a2_u8gbue.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fopn9jr3y"/><path class="a2_u8gbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-x-corner-filled"} {...others} />);
}

export default Component;
