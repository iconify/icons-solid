import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rb8zz63bl.css';
import '../../css/n/n7dk5qbji.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rb8zz63bl"/><path clip-rule="evenodd" class="n7dk5qbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:clipboard-add-flat"} {...others} />);
}

export default Component;
