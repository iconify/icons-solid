import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ekwamnsnd.css';
import '../../css/n/nht6_fbko.css';
import '../../css/l/lmu8d6bcl.css';
import '../../css/u/uztmj3dza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="ekwamnsnd"/><ellipse class="nht6_fbko"/><ellipse class="lmu8d6bcl"/><path class="uztmj3dza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medium-square"} {...others} />);
}

export default Component;
