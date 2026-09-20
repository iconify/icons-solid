import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gcdj1kg6u.css';
import '../../css/s/s57w0szaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gcdj1kg6u"/><path class="s57w0szaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hierarchy-2"} {...others} />);
}

export default Component;
