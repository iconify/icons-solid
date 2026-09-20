import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwts3rb1g.css';
import '../../css/v/vx2u40beg.css';
import '../../css/n/ndchddcke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="fwts3rb1g"/><path clip-rule="evenodd" class="vx2u40beg"/><path class="ndchddcke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-add-duotone-line"} {...others} />);
}

export default Component;
