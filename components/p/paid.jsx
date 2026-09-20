import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck1zpvp7z.css';
import '../../css/g/gv5ppo3az.css';
import '../../css/u/u4zjxwbyw.css';
import '../../css/h/hxq4vobqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ck1zpvp7z"/><path class="gv5ppo3az"/><path class="u4zjxwbyw"/><path class="hxq4vobqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:paid"} {...others} />);
}

export default Component;
