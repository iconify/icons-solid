import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jaj2r1bap.css';
import '../../css/e/effnay8ej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jaj2r1bap"/><path class="effnay8ej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:modern-music-electric-guitar"} {...others} />);
}

export default Component;
