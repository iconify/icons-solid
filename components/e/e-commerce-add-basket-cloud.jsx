import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iqhz4_b-c.css';
import '../../css/t/td_x8zbbs.css';
import '../../css/v/v30b6b27l.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iqhz4_b-c"/><path class="td_x8zbbs"/><path class="v30b6b27l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:e-commerce-add-basket-cloud"} {...others} />);
}

export default Component;
