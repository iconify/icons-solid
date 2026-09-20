import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqogua.css';
import '../../css/t/tr-2c6-rw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tqogua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:loading-loop"} {...others} />);
}

export default Component;
