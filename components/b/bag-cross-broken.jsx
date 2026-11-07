import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g4o4nebqu.css';
import '../../css/s/sr5bgubyr.css';
import '../../css/v/v77ej-64o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="g4o4nebqu"/><path class="sr5bgubyr"/><path class="v77ej-64o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-cross-broken"} {...others} />);
}

export default Component;
