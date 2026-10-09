import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut7yqz7tq.css';
import '../../css/z/zi82qc2iw.css';
import '../../css/w/w2897bbun.css';
import '../../css/l/lsrj_2bkq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ut7yqz7tq"/><path class="zi82qc2iw"/><path class="w2897bbun"/><path class="lsrj_2bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badminton-48"} {...others} />);
}

export default Component;
