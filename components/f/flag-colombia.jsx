import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dur0b2p3t.css';
import '../../css/l/lk8duns4e.css';
import '../../css/q/qh9qlceui.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dur0b2p3t"/><path class="lk8duns4e"/><path class="qh9qlceui"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-colombia"} {...others} />);
}

export default Component;
