import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qmijmpbpd.css';
import '../../css/g/gdpi26mpl.css';
import '../../css/v/vhe5-sisy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qmijmpbpd"/><path class="gdpi26mpl"/><path class="vhe5-sisy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:document-copy-filled"} {...others} />);
}

export default Component;
