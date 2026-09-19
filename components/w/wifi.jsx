import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am1rgeb0a.css';
import '../../css/g/gz7h90b8w.css';
import '../../css/u/ugho9_83h.css';
import '../../css/m/mqpwqt44o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="am1rgeb0a"/><path class="gz7h90b8w"/><path class="ugho9_83h"/><circle class="mqpwqt44o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:wifi"} {...others} />);
}

export default Component;
