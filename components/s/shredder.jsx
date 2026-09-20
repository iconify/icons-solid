import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bybcw2boh.css';
import '../../css/j/jr609tbff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bybcw2boh"/><path class="jr609tbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:shredder"} {...others} />);
}

export default Component;
