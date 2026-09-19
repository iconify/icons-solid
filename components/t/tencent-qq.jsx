import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrytx5oys.css';
import '../../css/t/tf1572afh.css';
import '../../css/t/tk0djig1v.css';
import '../../css/j/jqwsnsbia.css';
import '../../css/m/m9y3ei_os.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mrytx5oys"/><path clip-rule="evenodd" class="tf1572afh"/><path class="tk0djig1v"/><path class="jqwsnsbia"/><path class="m9y3ei_os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tencent-qq"} {...others} />);
}

export default Component;
