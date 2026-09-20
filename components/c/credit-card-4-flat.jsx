import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pglh9qbns.css';
import '../../css/w/wez7bcbwt.css';
import '../../css/n/ns-o5mhfn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pglh9qbns"/><path clip-rule="evenodd" class="wez7bcbwt"/><path clip-rule="evenodd" class="ns-o5mhfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:credit-card-4-flat"} {...others} />);
}

export default Component;
