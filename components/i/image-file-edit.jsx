import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iommg1o1p.css';
import '../../css/t/tokjrac3q.css';
import '../../css/t/tyjp77crt.css';
import '../../css/i/i38q3rydq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iommg1o1p"/><path class="tokjrac3q"/><path class="tyjp77crt"/><path class="i38q3rydq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:image-file-edit"} {...others} />);
}

export default Component;
