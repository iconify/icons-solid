import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itclwv49h.css';
import '../../css/c/cqfpns_9k.css';
import '../../css/d/d6hv1zb-w.css';
import '../../css/a/amzoqgb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="itclwv49h"/><path class="cqfpns_9k"/><path class="d6hv1zb-w"/><path class="amzoqgb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-file-adobe"} {...others} />);
}

export default Component;
