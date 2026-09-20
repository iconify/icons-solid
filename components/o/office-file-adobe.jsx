import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ohfrcir3t.css';
import '../../css/q/qkhv3sbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ohfrcir3t"/><path class="qkhv3sbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-file-adobe"} {...others} />);
}

export default Component;
