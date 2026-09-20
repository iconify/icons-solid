import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3hyvhbfs.css';
import '../../css/s/swin4bcne.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g3hyvhbfs"/><path class="swin4bcne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:notes-book-1"} {...others} />);
}

export default Component;
