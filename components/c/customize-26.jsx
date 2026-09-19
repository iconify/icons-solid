import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srd3wb14f.css';
import '../../css/l/l9a1-gjkh.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="srd3wb14f"/><circle class="l9a1-gjkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:customize-26"} {...others} />);
}

export default Component;
