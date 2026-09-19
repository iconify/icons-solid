import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rg-7g7f-y.css';
import '../../css/y/y7zppqbne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rg-7g7f-y"/><path class="y7zppqbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:inspection-panel"} {...others} />);
}

export default Component;
