import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p9t7-acdo.css';
import '../../css/u/utoav36ff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p9t7-acdo"/><path class="utoav36ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:bell"} {...others} />);
}

export default Component;
