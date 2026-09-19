import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oxg5dgbhu.css';
import '../../css/e/ej082w9-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oxg5dgbhu"/><path class="ej082w9-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:book"} {...others} />);
}

export default Component;
