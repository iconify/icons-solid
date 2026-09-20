import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jn1az9bta.css';
import '../../css/l/lbmyrt8fy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jn1az9bta"/><path class="lbmyrt8fy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-octagon"} {...others} />);
}

export default Component;
