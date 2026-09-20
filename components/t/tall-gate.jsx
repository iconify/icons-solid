import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glfvk6b0w.css';
import '../../css/k/kbmuw8bfw.css';
import '../../css/j/jxi6a_dgv.css';
import '../../css/g/g7f4pbc4j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="glfvk6b0w"/><path class="kbmuw8bfw"/><path class="jxi6a_dgv"/><path class="g7f4pbc4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:tall-gate"} {...others} />);
}

export default Component;
