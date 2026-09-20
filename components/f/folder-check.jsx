import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dh-0z0bmh.css';
import '../../css/h/hhy27hzak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="dh-0z0bmh"/><path class="hhy27hzak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-check"} {...others} />);
}

export default Component;
