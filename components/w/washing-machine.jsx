import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/re_3czw2d.css';
import '../../css/h/hb5frye-n.css';
import '../../css/g/gnawts8ku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="re_3czw2d"/><path class="hb5frye-n"/><path class="gnawts8ku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:washing-machine"} {...others} />);
}

export default Component;
