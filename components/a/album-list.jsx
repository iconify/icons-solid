import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yn7wr7nsx.css';
import '../../css/j/jb4vyelha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yn7wr7nsx"/><path class="jb4vyelha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:album-list"} {...others} />);
}

export default Component;
