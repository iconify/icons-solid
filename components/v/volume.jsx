import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3jzmqb-z.css';
import '../../css/y/yi4fhwbbj.css';
import '../../css/s/sw8zqyb7a.css';
import '../../css/o/ougqkdb9x.css';
import '../../css/w/wdnkeq5lh.css';
import '../../css/s/smyst3bvd.css';
import '../../css/o/op2r5mn1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n3jzmqb-z wm-k"/><path class="wm-k yi4fhwbbj"/><path class="sw8zqyb7a wm-k"/><path class="ougqkdb9x wm-shine"/><path class="wdnkeq5lh wm-a"/><path class="smyst3bvd wm-a"/><path class="op2r5mn1g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:volume"} {...others} />);
}

export default Component;
