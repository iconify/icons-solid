import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8cln5bam.css';
import '../../css/u/uu3z8f28g.css';
import '../../css/w/w42ds020q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8cln5bam"/><path class="uu3z8f28g"/><path class="w42ds020q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:save-pen-filled"} {...others} />);
}

export default Component;
