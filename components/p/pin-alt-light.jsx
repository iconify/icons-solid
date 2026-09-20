import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/eayipj5ml.css';
import '../../css/s/sgz67zbcf.css';
import '../../css/c/czb17zbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="eayipj5ml"/><path class="sgz67zbcf"/><circle class="czb17zbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pin-alt-light"} {...others} />);
}

export default Component;
