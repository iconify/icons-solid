import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tk7wfdcta.css';
import '../../css/e/ett3bsb0f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tk7wfdcta"/><path clip-rule="evenodd" class="ett3bsb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-protection-2-flat"} {...others} />);
}

export default Component;
