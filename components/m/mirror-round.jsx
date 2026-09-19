import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yzthyp46v.css';
import '../../css/g/gg4qvbbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yzthyp46v"/><circle class="gg4qvbbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mirror-round"} {...others} />);
}

export default Component;
