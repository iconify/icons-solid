import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/op65fjs0v.css';
import '../../css/e/et80wibgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="op65fjs0v"/><path class="et80wibgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-3d-lens"} {...others} />);
}

export default Component;
