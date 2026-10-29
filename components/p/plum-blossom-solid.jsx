import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jjazxhtlf.css';
import '../../css/i/iposknb4a.css';
import '../../css/j/jup179biu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="jjazxhtlf"/><path class="iposknb4a wm-a"/><path class="jup179biu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plum-blossom-solid"} {...others} />);
}

export default Component;
