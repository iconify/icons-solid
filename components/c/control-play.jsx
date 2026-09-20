import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmkzp2pqr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lmkzp2pqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:control-play"} {...others} />);
}

export default Component;
