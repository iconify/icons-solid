import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sbcoewbih.css';
import '../../css/v/v86g01bhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sbcoewbih"/><path class="v86g01bhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-round-check"} {...others} />);
}

export default Component;
