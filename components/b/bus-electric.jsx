import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h33-fip6j.css';
import '../../css/p/pug8hsa2n.css';
import '../../css/e/e7s-4vlpk.css';
import '../../css/j/js4khac8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h33-fip6j"/><circle class="pug8hsa2n"/><circle class="e7s-4vlpk"/><path class="js4khac8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:bus-electric"} {...others} />);
}

export default Component;
