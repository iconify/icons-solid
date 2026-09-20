import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuc8vzc5h.css';
import '../../css/p/pf39bxbph.css';
import '../../css/q/qf-g4ac9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xuc8vzc5h"/><path class="pf39bxbph"/><path class="qf-g4ac9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:credit-card-detailed-alt-duotone"} {...others} />);
}

export default Component;
