import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wp4knqb8q.css';
import '../../css/k/khnsq01cy.css';
import '../../css/i/i5xw9gqsb.css';
import '../../css/e/eaj47cc_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k wp4knqb8q"/><path class="khnsq01cy wm-a"/><path class="i5xw9gqsb wm-k"/><path class="eaj47cc_q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:palm-tree-sketch"} {...others} />);
}

export default Component;
