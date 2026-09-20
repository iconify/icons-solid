import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vx1xbnbnt.css';
import '../../css/d/dbvwp4b7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vx1xbnbnt"/><path class="dbvwp4b7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-call"} {...others} />);
}

export default Component;
