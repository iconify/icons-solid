import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb3_ltwpz.css';
import '../../css/w/w3wwgabxw.css';
import '../../css/t/tmw7p3amd.css';
import '../../css/y/ysbc8xu9o.css';
import '../../css/z/z6s52udqi.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nb3_ltwpz"/><g class="w3wwgabxw"><path class="tmw7p3amd"/><path class="ysbc8xu9o"/></g><path class="z6s52udqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:admission-tickets"} {...others} />);
}

export default Component;
