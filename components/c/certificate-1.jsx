import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-ef9nbbz.css';
import '../../css/c/cdttq2bdi.css';
import '../../css/b/b9mfdcciy.css';
import '../../css/f/f_qhw5rdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x-ef9nbbz"/><path class="cdttq2bdi"/><path class="b9mfdcciy"/><path class="f_qhw5rdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:certificate-1"} {...others} />);
}

export default Component;
