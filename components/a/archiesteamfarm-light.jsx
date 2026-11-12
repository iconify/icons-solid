import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i81glf6jl.css';
import '../../css/l/l7mnr242b.css';
import '../../css/f/fjc_neb3w.css';
import '../../css/w/wnntk5btw.css';
import '../../css/o/o74zwjd5w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i81glf6jl"/><path class="l7mnr242b"/><path class="fjc_neb3w"/><path class="wnntk5btw"/><path class="o74zwjd5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:archiesteamfarm-light"} {...others} />);
}

export default Component;
