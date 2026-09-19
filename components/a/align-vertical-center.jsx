import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx8y2ds-k.css';
import '../../css/q/q0m24db3d.css';
import '../../css/i/idhaus_4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gx8y2ds-k"><path class="q0m24db3d"/><path class="idhaus_4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:align-vertical-center"} {...others} />);
}

export default Component;
