import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sii5elbef.css';
import '../../css/v/vdb-37byt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sii5elbef"/><path clip-rule="evenodd" class="vdb-37byt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:book-outline"} {...others} />);
}

export default Component;
