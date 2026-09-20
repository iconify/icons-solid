import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehla161da.css';
import '../../css/c/cw43ddbzu.css';
import '../../css/h/hgx3hyllr.css';
import '../../css/u/ubqg40bnq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ehla161da"/><path class="cw43ddbzu"/><path class="hgx3hyllr"/><path class="ubqg40bnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:definition-search-book"} {...others} />);
}

export default Component;
