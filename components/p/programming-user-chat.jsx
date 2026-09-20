import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mecugdb7z.css';
import '../../css/p/pcy004bij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mecugdb7z"/><path class="pcy004bij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:programming-user-chat"} {...others} />);
}

export default Component;
