import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mun6vbc9f.css';
import '../../css/z/z0fhwabjm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mun6vbc9f wm-k"/><path class="wm-a z0fhwabjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:square-minus"} {...others} />);
}

export default Component;
