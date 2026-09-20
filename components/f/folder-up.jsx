import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/m/mkxepv8wz.css';
import '../../css/s/s80f5e39m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="mkxepv8wz"/><path class="s80f5e39m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-up"} {...others} />);
}

export default Component;
