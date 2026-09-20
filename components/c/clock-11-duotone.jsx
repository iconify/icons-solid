import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h5v13_bfu.css';
import '../../css/w/w46kj2vjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h5v13_bfu"/><path class="w46kj2vjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-11-duotone"} {...others} />);
}

export default Component;
