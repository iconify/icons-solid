import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpzed0b9q.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="vpzed0b9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:hdvideo"} {...others} />);
}

export default Component;
