import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnqa97brp.css';
import '../../css/s/s0zsy9ict.css';
import '../../css/x/x7ihsub_r.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cnqa97brp"/><path class="s0zsy9ict"/><path class="x7ihsub_r"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-tanzania"} {...others} />);
}

export default Component;
