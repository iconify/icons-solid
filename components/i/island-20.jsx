import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3othib8i.css';
import '../../css/b/b26krwbpl.css';
import '../../css/t/t1mey7b0j.css';
import '../../css/c/cwuyrvbdo.css';
import '../../css/g/gik-1umgx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h3othib8i"/><path class="b26krwbpl"/><path class="t1mey7b0j"/><path class="cwuyrvbdo"/><path class="gik-1umgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:island-20"} {...others} />);
}

export default Component;
