import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tvt6t7zoo.css';
import '../../css/h/hfuge5b1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tvt6t7zoo"/><path class="hfuge5b1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:light-mode-hdr"} {...others} />);
}

export default Component;
