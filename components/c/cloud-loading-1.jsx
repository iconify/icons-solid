import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m452x-bjv.css';
import '../../css/i/iw0exkk1c.css';
import '../../css/s/shmqb_b9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m452x-bjv"/><path class="iw0exkk1c"/><path class="shmqb_b9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cloud-loading-1"} {...others} />);
}

export default Component;
