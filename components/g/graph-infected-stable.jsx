import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eqqvvwb3e.css';
import '../../css/e/emjm_bcem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eqqvvwb3e"/><path class="emjm_bcem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:graph-infected-stable"} {...others} />);
}

export default Component;
