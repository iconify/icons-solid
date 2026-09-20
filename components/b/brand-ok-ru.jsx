import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ycrm45b1o.css';
import '../../css/g/ge98facrb.css';
import '../../css/s/s43872z3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ycrm45b1o"/><path class="ge98facrb"/><path class="s43872z3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-ok-ru"} {...others} />);
}

export default Component;
