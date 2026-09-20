import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sdeke6b0d.css';
import '../../css/o/ozxu2z9dc.css';
import '../../css/c/c9nmvl4gm.css';
import '../../css/a/afxlu6cvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sdeke6b0d"/><path class="ozxu2z9dc"/><path class="c9nmvl4gm"/><path class="afxlu6cvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mailbox-linear"} {...others} />);
}

export default Component;
