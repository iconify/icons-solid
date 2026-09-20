import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p13004bfj.css';
import '../../css/m/m79egobtu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p13004bfj"/><path class="m79egobtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:uos"} {...others} />);
}

export default Component;
