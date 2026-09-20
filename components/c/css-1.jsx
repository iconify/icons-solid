import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8a26skit.css';
import '../../css/t/tguc5sbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t8a26skit"/><path class="tguc5sbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:css-1"} {...others} />);
}

export default Component;
