import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ofqdnjbeo.css';
import '../../css/a/apq205dwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ofqdnjbeo"/><path class="apq205dwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:megaphone-02"} {...others} />);
}

export default Component;
