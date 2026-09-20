import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s16nl6bqm.css';
import '../../css/x/xinq97epj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s16nl6bqm"/><path class="xinq97epj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:messages-duotone"} {...others} />);
}

export default Component;
