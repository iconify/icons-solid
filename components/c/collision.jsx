import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t03nuhbri.css';
import '../../css/o/o009mi2vr.css';
import '../../css/m/mgc9oebml.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGuZuE3cSy" cx=".35" cy=".3" r=".8"><stop offset="0" class="t03nuhbri"/><stop offset="1" class="o009mi2vr"/></radialGradient></defs><path fill="url(#SVGuZuE3cSy)" transform="matrix(2.3 0 0 2.3 27.13 27.13)" class="mgc9oebml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:collision"} {...others} />);
}

export default Component;
