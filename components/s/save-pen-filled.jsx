import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8cln5bam.css';
import '../../css/j/j0iubn3mf.css';
import '../../css/i/is0qnibip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8cln5bam"/><path class="j0iubn3mf"/><path class="is0qnibip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:save-pen-filled"} {...others} />);
}

export default Component;
