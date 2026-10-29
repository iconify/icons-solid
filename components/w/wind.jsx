import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edoifnexa.css';
import '../../css/a/axvvxkbhp.css';
import '../../css/i/i5uzet8dn.css';
import '../../css/m/mwph9vbmk.css';
import '../../css/f/fv94c3kzw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edoifnexa wm-shadow"/><path class="axvvxkbhp wm-k"/><path class="i5uzet8dn wm-k"/><path class="mwph9vbmk wm-a"/><path class="fv94c3kzw wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:wind"} {...others} />);
}

export default Component;
