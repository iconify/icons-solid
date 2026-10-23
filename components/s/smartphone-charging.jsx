import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xt--6yqaw.css';
import '../../css/y/yq--07jli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xt--6yqaw"/><path class="yq--07jli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:smartphone-charging"} {...others} />);
}

export default Component;
