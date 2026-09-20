import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdyoa5b9x.css';
import '../../css/o/oy550fbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kdyoa5b9x"/><path class="oy550fbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:notes-checklist-flip-bold"} {...others} />);
}

export default Component;
