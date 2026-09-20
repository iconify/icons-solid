import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da0su4uhx.css';
import '../../css/t/tfi0d09kv.css';
import '../../css/s/s5bjb7baj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="da0su4uhx"/><path class="tfi0d09kv"/><path class="s5bjb7baj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:tree"} {...others} />);
}

export default Component;
