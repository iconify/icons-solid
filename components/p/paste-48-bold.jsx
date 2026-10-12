import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adm1b9bzj.css';
import '../../css/s/sizbx91ge.css';
import '../../css/i/iwbhkacly.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="adm1b9bzj"/><path class="sizbx91ge"/><path class="iwbhkacly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paste-48-bold"} {...others} />);
}

export default Component;
