import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr9frt1jp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zr9frt1jp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:view-gantt-filled"} {...others} />);
}

export default Component;
