import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xjkpw7btk.css';
import '../../css/w/wdxawpb6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xjkpw7btk"/><path class="wdxawpb6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:fitness-shaker"} {...others} />);
}

export default Component;
