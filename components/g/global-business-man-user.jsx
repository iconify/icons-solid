import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ygkrz3brf.css';
import '../../css/r/rad-qtbob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ygkrz3brf"/><path class="rad-qtbob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:global-business-man-user"} {...others} />);
}

export default Component;
