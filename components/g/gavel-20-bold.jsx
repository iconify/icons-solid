import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1ckqlb3r.css';
import '../../css/l/lhsg4trxw.css';
import '../../css/o/ozsbau3sa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y1ckqlb3r"/><path class="lhsg4trxw"/><path class="ozsbau3sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gavel-20-bold"} {...others} />);
}

export default Component;
