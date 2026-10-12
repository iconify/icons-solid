import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ss_t9i44u.css';
import '../../css/h/h3bq2ibsx.css';
import '../../css/q/q0mlhtd6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ss_t9i44u"/><rect class="h3bq2ibsx"/><rect class="q0mlhtd6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:exclude"} {...others} />);
}

export default Component;
