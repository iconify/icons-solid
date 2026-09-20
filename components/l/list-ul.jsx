import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/daui_jbia.css';
import '../../css/f/f7gi_3bba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="daui_jbia"/><path class="f7gi_3bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:list-ul"} {...others} />);
}

export default Component;
