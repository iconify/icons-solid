import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngpo85bro.css';
import '../../css/c/c0ylvub-c.css';
import '../../css/x/xo0o4nf2y.css';
import '../../css/v/vroonz3_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ngpo85bro"/><path class="c0ylvub-c"/><path class="xo0o4nf2y"/><path class="vroonz3_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-exchange"} {...others} />);
}

export default Component;
