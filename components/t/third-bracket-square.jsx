import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gangf8bof.css';
import '../../css/y/y7zppqbne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gangf8bof"/><path class="y7zppqbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:third-bracket-square"} {...others} />);
}

export default Component;
