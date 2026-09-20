import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnqa97brp.css';
import '../../css/t/tsvbfvbzz.css';
import '../../css/i/i-85-zf4z.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cnqa97brp"/><path class="tsvbfvbzz"/><path class="i-85-zf4z"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-canary-islands"} {...others} />);
}

export default Component;
