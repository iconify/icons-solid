import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vn836rd4o.css';
import '../../css/f/fg82nsbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vn836rd4o"/><path class="fg82nsbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wallet-not-found-02"} {...others} />);
}

export default Component;
