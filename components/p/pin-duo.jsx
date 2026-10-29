import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m-2e2acrw.css';
import '../../css/d/de1npwusp.css';
import '../../css/y/ykc6yv3ga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m-2e2acrw"/><path class="de1npwusp wm-a"/><path class="ykc6yv3ga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pin-duo"} {...others} />);
}

export default Component;
