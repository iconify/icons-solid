import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xulhkp85g.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="xulhkp85g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:icecreamthree"} {...others} />);
}

export default Component;
