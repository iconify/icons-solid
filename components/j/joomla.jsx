import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlw4881-w.css';
import '../../css/f/fp5wvo1sn.css';
import '../../css/w/wwbd329qt.css';
import '../../css/h/hii85eizm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zlw4881-w"/><path class="fp5wvo1sn"/><path class="wwbd329qt"/><path class="hii85eizm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:joomla"} {...others} />);
}

export default Component;
