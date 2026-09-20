import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfnxo0etm.css';
import '../../css/j/jb-34lb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfnxo0etm"/><path class="jb-34lb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shop-5-filled"} {...others} />);
}

export default Component;
