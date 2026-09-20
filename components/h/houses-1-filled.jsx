import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4lpbh9cz.css';
import '../../css/j/jb-34lb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4lpbh9cz"/><path class="jb-34lb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:houses-1-filled"} {...others} />);
}

export default Component;
