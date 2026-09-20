import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nggdf7y2k.css';
import '../../css/d/ds0cdnxye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nggdf7y2k"/><path class="ds0cdnxye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:flag-2"} {...others} />);
}

export default Component;
