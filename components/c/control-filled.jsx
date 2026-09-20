import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umprgqz0j.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="umprgqz0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:control-filled"} {...others} />);
}

export default Component;
