import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srfvlds5l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zfzytlb2v.css';
import '../../css/v/vrgoaknvm.css';
import '../../css/s/sa3gq0d8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary srfvlds5l"/><g class="dt0cm9dhy primary"><path class="zfzytlb2v"/><path class="vrgoaknvm"/><path class="sa3gq0d8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layer-arrow-down-duo"} {...others} />);
}

export default Component;
