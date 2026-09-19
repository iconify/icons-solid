import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dn7tk1h8a.css';
import '../../css/r/r59y2ubhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dn7tk1h8a"/><path class="r59y2ubhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bookmark-check-02"} {...others} />);
}

export default Component;
