import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gw5pmti4f.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/c/cha5tqklr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gw5pmti4f"/><path class="rs0wrok6f"/><path class="cha5tqklr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-lightning"} {...others} />);
}

export default Component;
