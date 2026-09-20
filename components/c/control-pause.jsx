import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpbz6ib3j.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lpbz6ib3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:control-pause"} {...others} />);
}

export default Component;
