import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sjowjbelj.css';
import '../../css/i/i5cryzbhk.css';
import '../../css/g/g76q6noeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="sjowjbelj"/><path class="i5cryzbhk"/><path class="g76q6noeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:city-02"} {...others} />);
}

export default Component;
