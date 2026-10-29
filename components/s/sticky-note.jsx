import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-018mx1x.css';
import '../../css/x/xoollor0t.css';
import '../../css/d/dn5423bcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-018mx1x wm-k"/><path class="wm-k xoollor0t"/><path class="dn5423bcn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sticky-note"} {...others} />);
}

export default Component;
