import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-86hkn1j.css';
import '../../css/c/c2y1mvb0a.css';
import '../../css/f/f7amh2brp.css';
import '../../css/h/hoxfigbof.css';
import '../../css/z/z1cfigdhm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d-86hkn1j"/><path class="c2y1mvb0a"/><path class="f7amh2brp"/><path class="hoxfigbof"/><path class="z1cfigdhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bichon-light"} {...others} />);
}

export default Component;
