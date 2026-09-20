import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e25zqnb-w.css';
import '../../css/c/c40er8boe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e25zqnb-w"/><path class="c40er8boe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:upload-computer"} {...others} />);
}

export default Component;
