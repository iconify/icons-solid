import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6wq2qewp.css';
import '../../css/v/v1db-bbbt.css';
import '../../css/a/aaralt-wc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n6wq2qewp"/><path class="v1db-bbbt"/><path class="aaralt-wc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hand-helping-duotone"} {...others} />);
}

export default Component;
