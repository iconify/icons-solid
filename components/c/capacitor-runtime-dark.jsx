import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbhczis_n.css';
import '../../css/g/g6y54xlpm.css';
import '../../css/u/up9gopgdj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hbhczis_n"/><path class="g6y54xlpm"/><path class="up9gopgdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:capacitor-runtime-dark"} {...others} />);
}

export default Component;
