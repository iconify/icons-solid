import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n-jiqbc_y.css';
import '../../css/w/w1_x6n12x.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n-jiqbc_y"/><path class="w1_x6n12x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrange-list-descending-1-bold"} {...others} />);
}

export default Component;
