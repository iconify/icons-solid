import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kou9gph0k.css';
import '../../css/n/n0oad-elc.css';
import '../../css/i/il-zaab7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kou9gph0k"/><path class="n0oad-elc"/><path class="il-zaab7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:annotations-plus"} {...others} />);
}

export default Component;
