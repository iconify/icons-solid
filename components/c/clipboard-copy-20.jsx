import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb3dnqqxo.css';
import '../../css/v/vvipxtb-q.css';
import '../../css/v/v93buebvk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xb3dnqqxo"/><path class="vvipxtb-q"/><path class="v93buebvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-copy-20"} {...others} />);
}

export default Component;
