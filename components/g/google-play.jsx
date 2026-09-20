import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa6m-3b-n.css';
import '../../css/t/tszhuobqh.css';
import '../../css/z/zjx5z9b7a.css';
import '../../css/r/rzgmi4b0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xa6m-3b-n"/><path class="tszhuobqh"/><path class="zjx5z9b7a"/><path class="rzgmi4b0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:google-play"} {...others} />);
}

export default Component;
