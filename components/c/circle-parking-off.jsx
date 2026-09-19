import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f8o0ncbxg.css';
import '../../css/o/o73yuachd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f8o0ncbxg"/><path class="o73yuachd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:circle-parking-off"} {...others} />);
}

export default Component;
