import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy0tudc-i.css';
import '../../css/n/nqpneqdrk.css';
import '../../css/h/hr_krlbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yy0tudc-i"/><path class="nqpneqdrk"/><path class="hr_krlbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ram-memory"} {...others} />);
}

export default Component;
