import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/du3s13z_f.css';
import '../../css/t/tv8n5ab9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="du3s13z_f"/><path class="tv8n5ab9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:skip-forward"} {...others} />);
}

export default Component;
