import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zt0i7jcnm.css';
import '../../css/f/fzynkptvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zt0i7jcnm"/><path class="fzynkptvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:locker-room-suitcase-key"} {...others} />);
}

export default Component;
