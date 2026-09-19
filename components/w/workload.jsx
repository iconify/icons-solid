import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5_ojsbrt.css';
import '../../css/q/qesa7pb9s.css';
import '../../css/b/biog0ibqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s5_ojsbrt"/><path class="qesa7pb9s"/><path class="biog0ibqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:workload"} {...others} />);
}

export default Component;
