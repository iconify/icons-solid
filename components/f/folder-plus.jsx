import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxxd9_b1b.css';
import '../../css/m/m8u4nj3lr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hxxd9_b1b"/><path class="m8u4nj3lr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:folder-plus"} {...others} />);
}

export default Component;
