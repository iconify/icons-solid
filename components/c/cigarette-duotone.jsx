import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdfqalb9f.css';
import '../../css/g/gmeb2531e.css';
import '../../css/f/fvy498wfe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wdfqalb9f"/><path class="gmeb2531e"/><path class="fvy498wfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cigarette-duotone"} {...others} />);
}

export default Component;
