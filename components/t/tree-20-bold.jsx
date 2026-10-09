import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utcxkkbxw.css';
import '../../css/g/gtg_bmb_n.css';
import '../../css/t/t87_xhoos.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="utcxkkbxw"/><path class="gtg_bmb_n"/><path class="t87_xhoos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tree-20-bold"} {...others} />);
}

export default Component;
