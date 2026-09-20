import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo0zz1btx.css';
import '../../css/o/o7lpvfbsc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zo0zz1btx"/><path class="o7lpvfbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:latin-cross"} {...others} />);
}

export default Component;
