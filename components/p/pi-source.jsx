import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stc4fdcup.css';
import '../../css/h/hwdb9lbix.css';
import '../../css/h/hdfgeqb3t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="stc4fdcup"/><path class="hwdb9lbix"/><path class="hdfgeqb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pi-source"} {...others} />);
}

export default Component;
