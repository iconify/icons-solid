import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-imqxbqc.css';
import '../../css/i/i6ih-jbst.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b-imqxbqc"/><path class="i6ih-jbst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-conditioning-48-bold"} {...others} />);
}

export default Component;
