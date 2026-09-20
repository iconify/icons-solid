import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqgcw6b7t.css';
import '../../css/n/nilrpv0hn.css';
import '../../css/g/g2ar-1hfi.css';
import '../../css/i/ickxr2b1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uqgcw6b7t"/><path class="nilrpv0hn"/><path class="g2ar-1hfi"/><path class="ickxr2b1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-2"} {...others} />);
}

export default Component;
