import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pr0r_23gm.css';
import '../../css/g/g1j_4nbjv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuIAk4cPA"><g class="v3_i3wktz"><path clip-rule="evenodd" class="pr0r_23gm"/><path class="g1j_4nbjv"/></g></mask></defs><path mask="url(#SVGuIAk4cPA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:water-level"} {...others} />);
}

export default Component;
