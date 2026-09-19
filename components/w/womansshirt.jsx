import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv1k-567q.css';
import '../../css/v/vc6_trz7f.css';
import '../../css/x/xwykv3bha.css';
import '../../css/u/ug1iwydvf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rv1k-567q"/><path class="vc6_trz7f"/><path class="xwykv3bha"/><path class="ug1iwydvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:womansshirt"} {...others} />);
}

export default Component;
