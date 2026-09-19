import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjpo_lbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jjpo_lbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:folder-blocked"} {...others} />);
}

export default Component;
