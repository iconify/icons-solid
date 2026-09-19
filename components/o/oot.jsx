import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vwnp3il7p.css';
import '../../css/a/axya0fz6f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="vwnp3il7p"/><path class="axya0fz6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:oot"} {...others} />);
}

export default Component;
