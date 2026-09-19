import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o87ybkebd.css';
import '../../css/y/y7zppqbne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o87ybkebd"/><path class="y7zppqbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:second-bracket-square"} {...others} />);
}

export default Component;
