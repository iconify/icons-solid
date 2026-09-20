import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o98ro-b0q.css';
import '../../css/q/qgy99obou.css';
import '../../css/r/r17ye20_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o98ro-b0q"/><path clip-rule="evenodd" class="qgy99obou"/><path class="r17ye20_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-out-box-light"} {...others} />);
}

export default Component;
