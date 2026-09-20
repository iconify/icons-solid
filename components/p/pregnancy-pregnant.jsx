import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bydacdcul.css';
import '../../css/d/dtcrrscne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bydacdcul"/><path class="dtcrrscne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pregnancy-pregnant"} {...others} />);
}

export default Component;
