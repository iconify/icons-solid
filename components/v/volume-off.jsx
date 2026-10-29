import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3jzmqb-z.css';
import '../../css/y/yi4fhwbbj.css';
import '../../css/s/sw8zqyb7a.css';
import '../../css/o/ougqkdb9x.css';
import '../../css/w/wz3iszb-f.css';
import '../../css/e/ef1ajl-7p.css';
import '../../css/b/byy20xb4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n3jzmqb-z wm-k"/><path class="wm-k yi4fhwbbj"/><path class="sw8zqyb7a wm-k"/><path class="ougqkdb9x wm-shine"/><path class="wm-s wz3iszb-f"/><path class="ef1ajl-7p wm-s"/><path class="byy20xb4t wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:volume-off"} {...others} />);
}

export default Component;
