import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pchbanb-p.css';
import '../../css/c/cjt-mmb4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pchbanb-p"/><path class="cjt-mmb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:jsx-03"} {...others} />);
}

export default Component;
