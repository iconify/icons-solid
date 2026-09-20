import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zigw0qw9c.css';
import '../../css/v/v1-eb0-6b.css';
import '../../css/n/nqnkx7b8v.css';
import '../../css/c/c5tdnidvq.css';
import '../../css/w/wroccvbda.css';
import '../../css/n/npgdrt9th.css';
import '../../css/v/vqzu4fb9y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zigw0qw9c"/><path class="v1-eb0-6b"/><path clip-rule="evenodd" class="nqnkx7b8v"/><path class="c5tdnidvq"/><path clip-rule="evenodd" class="wroccvbda"/><path class="npgdrt9th"/><path clip-rule="evenodd" class="vqzu4fb9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:castle-duo"} {...others} />);
}

export default Component;
