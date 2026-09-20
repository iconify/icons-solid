import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k2-cmqk-r.css';
import '../../css/i/ir1b35b3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k2-cmqk-r"/><path class="ir1b35b3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-off-fill"} {...others} />);
}

export default Component;
