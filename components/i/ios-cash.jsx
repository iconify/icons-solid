import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_1hnfwlj.css';
import '../../css/m/m50re4ijw.css';
import '../../css/o/okx3-dbox.css';
import '../../css/a/axr2tcbfl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z_1hnfwlj"/><path class="m50re4ijw"/><path class="okx3-dbox"/><circle class="axr2tcbfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cash"} {...others} />);
}

export default Component;
