import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghg15tbaf.css';
import '../../css/h/her1bcu1f.css';
import '../../css/k/k6-gi9bti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ghg15tbaf"/><path class="her1bcu1f"/><path class="k6-gi9bti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cactus"} {...others} />);
}

export default Component;
