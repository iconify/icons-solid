import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpo5tjoma.css';
import '../../css/r/rc0x7kb9f.css';
import '../../css/o/o8sw_bbzo.css';
import '../../css/j/j0apqq_6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qpo5tjoma"/><path class="rc0x7kb9f"/><path class="o8sw_bbzo"/><path class="j0apqq_6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-outline"} {...others} />);
}

export default Component;
