import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h2ub2abfi.css';
import '../../css/x/xw-l9fkxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h2ub2abfi"/><path class="xw-l9fkxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:image-up"} {...others} />);
}

export default Component;
