import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/y/y--4l3cfh.css';
import '../../css/s/smffg765a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="y--4l3cfh"/><path class="smffg765a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:home"} {...others} />);
}

export default Component;
