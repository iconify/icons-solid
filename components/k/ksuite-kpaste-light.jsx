import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/deg8ao8ms.css';
import '../../css/p/piysc6sno.css';
import '../../css/c/c3vcymbtp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="deg8ao8ms"/><path class="piysc6sno"/><path class="c3vcymbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kpaste-light"} {...others} />);
}

export default Component;
