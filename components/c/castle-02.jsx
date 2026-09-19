import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9s6x0bdf.css';
import '../../css/x/xia90ebaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o9s6x0bdf"/><path class="xia90ebaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:castle-02"} {...others} />);
}

export default Component;
