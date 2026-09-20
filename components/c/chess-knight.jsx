import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k_3ijcb6f.css';
import '../../css/o/orq08htca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k_3ijcb6f"/><path class="orq08htca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:chess-knight"} {...others} />);
}

export default Component;
