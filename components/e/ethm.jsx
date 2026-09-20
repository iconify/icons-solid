import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj9_93b9n.css';
import '../../css/j/j-ja1cc5v.css';
import '../../css/q/qkn211b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tj9_93b9n"/><path class="j-ja1cc5v"/><path class="qkn211b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ethm"} {...others} />);
}

export default Component;
