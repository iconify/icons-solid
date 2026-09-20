import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qejnf7b9o.css';
import '../../css/g/g2ez3_b3e.css';
import '../../css/h/he5v6zbbo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qejnf7b9o"/><path class="g2ez3_b3e"/><path class="he5v6zbbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smoking-area-flat"} {...others} />);
}

export default Component;
