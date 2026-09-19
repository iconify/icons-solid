import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gh5e_vb1o.css';
import '../../css/s/s1hmp9uzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gh5e_vb1o"/><path class="s1hmp9uzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:delivery-return-02"} {...others} />);
}

export default Component;
