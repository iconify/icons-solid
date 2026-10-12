import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no1df2bgu.css';
import '../../css/x/xkm9zugsj.css';
import '../../css/n/nprl0tq2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="no1df2bgu"/><path class="xkm9zugsj"/><path class="nprl0tq2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-align-outside"} {...others} />);
}

export default Component;
