import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0xlczgvc.css';
import '../../css/s/syzigfb3q.css';
import '../../css/j/j_a6aebui.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o0xlczgvc"/><path class="syzigfb3q"/><path class="j_a6aebui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:monero"} {...others} />);
}

export default Component;
