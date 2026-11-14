import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zvfyfdbdi.css';
import '../../css/t/themptbtt.css';
import '../../css/u/uwm7z1qdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="zvfyfdbdi"/><rect class="themptbtt"/><path class="uwm7z1qdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:card-terminal"} {...others} />);
}

export default Component;
