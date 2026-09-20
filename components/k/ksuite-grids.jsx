import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csjrsmrug.css';
import '../../css/r/r97qhgpob.css';
import '../../css/e/edf9-acys.css';
import '../../css/q/qz8noi23z.css';
import '../../css/j/jrdvhubxc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="csjrsmrug"/><path class="r97qhgpob"/><path class="edf9-acys"/><path class="qz8noi23z"/><path class="jrdvhubxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-grids"} {...others} />);
}

export default Component;
