import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g-6ltnuzp.css';
import '../../css/d/ddmo6vb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g-6ltnuzp"/><path class="ddmo6vb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:tooth"} {...others} />);
}

export default Component;
