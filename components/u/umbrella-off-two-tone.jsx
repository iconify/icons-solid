import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y89cpibpf.css';
import '../../css/h/hdthxbcjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y89cpibpf"/><path class="hdthxbcjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:umbrella-off-two-tone"} {...others} />);
}

export default Component;
