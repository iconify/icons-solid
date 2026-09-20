import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnqa97brp.css';
import '../../css/r/rrv4pwbeq.css';
import '../../css/q/qa8dft0lk.css';
import '../../css/s/s3bya1bop.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cnqa97brp"/><path class="rrv4pwbeq"/><path class="qa8dft0lk"/><path class="s3bya1bop"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-kazakhstan"} {...others} />);
}

export default Component;
