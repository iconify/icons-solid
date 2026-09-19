import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/l/l1qen_bar.css';
import '../../css/t/tostm8b8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><circle class="shu3xdl9q"/><path class="l1qen_bar"/><path class="tostm8b8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:face-very-happy"} {...others} />);
}

export default Component;
