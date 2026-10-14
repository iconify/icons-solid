import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/hful5vo0l.css';
import '../../css/y/yys2mt-hg.css';
import '../../css/b/bgu9jmbze.css';
import '../../css/h/hiyd2bczp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="hful5vo0l"/><path class="yys2mt-hg"/><path class="bgu9jmbze"/><path class="hiyd2bczp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:layout-grid"} {...others} />);
}

export default Component;
