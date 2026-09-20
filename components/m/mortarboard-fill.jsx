import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge0c7ebqz.css';
import '../../css/d/dabr2tbbh.css';
import '../../css/j/j5ohattzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ge0c7ebqz"/><path clip-rule="evenodd" class="dabr2tbbh"/><path class="j5ohattzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mortarboard-fill"} {...others} />);
}

export default Component;
