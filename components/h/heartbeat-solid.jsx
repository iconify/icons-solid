import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_ywknb6x.css';
import '../../css/g/gf6bg710v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_ywknb6x"/><path class="gf6bg710v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:heartbeat-solid"} {...others} />);
}

export default Component;
