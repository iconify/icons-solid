import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r3pdth4lq.css';
import '../../css/w/wdw2xxi4u.css';
import '../../css/t/twwrszpor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r3pdth4lq"/><path class="wdw2xxi4u"/><path class="twwrszpor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-star"} {...others} />);
}

export default Component;
