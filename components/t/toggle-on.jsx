import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n2o5n6b0f.css';
import '../../css/v/viu-2m8dq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n2o5n6b0f"/><path class="viu-2m8dq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:toggle-on"} {...others} />);
}

export default Component;
