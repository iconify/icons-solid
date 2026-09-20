import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/l/lx7mkia0m.css';
import '../../css/q/qbvm-ptbk.css';
import '../../css/d/d11zk7bwu.css';
import '../../css/v/v16rxls8d.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="lx7mkia0m"/><path class="qbvm-ptbk"/><path class="d11zk7bwu"/><path class="v16rxls8d"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-vanuatu"} {...others} />);
}

export default Component;
