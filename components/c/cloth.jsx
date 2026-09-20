import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osa6iacrl.css';
import '../../css/v/vv3o_rb-m.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="osa6iacrl"/><path class="vv3o_rb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:cloth"} {...others} />);
}

export default Component;
