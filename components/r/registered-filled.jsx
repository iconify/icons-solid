import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy03h6b4p.css';
import '../../css/b/bqc5p2b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oy03h6b4p"/><path class="bqc5p2b1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:registered-filled"} {...others} />);
}

export default Component;
