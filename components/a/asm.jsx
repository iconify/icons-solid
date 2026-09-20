import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5sa_rb5p.css';
import '../../css/h/hn41-unac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j5sa_rb5p"/><path class="hn41-unac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:asm"} {...others} />);
}

export default Component;
