import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz1zm2bdm.css';
import '../../css/i/iidqvbcem.css';
import '../../css/w/wk97p5bdt.css';
import '../../css/b/b9k9m9mqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qz1zm2bdm"/><path class="iidqvbcem"/><path class="wk97p5bdt"/><path class="b9k9m9mqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:package-open-duotone"} {...others} />);
}

export default Component;
