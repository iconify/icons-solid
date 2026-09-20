import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f25ju-b2q.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="f25ju-b2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:wmo4680-00"} {...others} />);
}

export default Component;
