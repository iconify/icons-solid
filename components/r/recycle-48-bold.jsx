import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otb2xbb3k.css';
import '../../css/p/pkdwskbpr.css';
import '../../css/g/g1mzogb6g.css';
import '../../css/d/da0i6bcpf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="otb2xbb3k"/><path class="pkdwskbpr"/><path class="g1mzogb6g"/><path class="da0i6bcpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recycle-48-bold"} {...others} />);
}

export default Component;
