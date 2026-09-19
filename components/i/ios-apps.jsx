import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6b0lkikv.css';
import '../../css/i/ixx3zz-eq.css';
import '../../css/m/m1ue-3z0j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z6b0lkikv"/><path class="ixx3zz-eq"/><path class="m1ue-3z0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-apps"} {...others} />);
}

export default Component;
