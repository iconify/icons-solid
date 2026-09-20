import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t1afujhin.css';
import '../../css/t/t7jkg_bmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t1afujhin"/><path class="t7jkg_bmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:repeat-linear"} {...others} />);
}

export default Component;
