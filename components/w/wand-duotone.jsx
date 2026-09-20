import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl70btbxk.css';
import '../../css/a/ax074xbxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sl70btbxk"/><path class="ax074xbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:wand-duotone"} {...others} />);
}

export default Component;
