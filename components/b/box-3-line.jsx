import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc3d2blkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc3d2blkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:box-3-line"} {...others} />);
}

export default Component;
