import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/k/kgwew5b_w.css';
import '../../css/n/n7zdmgmpe.css';
import '../../css/m/mv8qgobck.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><circle class="kgwew5b_w"/><path class="n7zdmgmpe"/><path class="mv8qgobck"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-niger"} {...others} />);
}

export default Component;
