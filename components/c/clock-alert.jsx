import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mtt1k0baw.css';
import '../../css/g/gl3vn9r7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mtt1k0baw"/><path class="gl3vn9r7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clock-alert"} {...others} />);
}

export default Component;
