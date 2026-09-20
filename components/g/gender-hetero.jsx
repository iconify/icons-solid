import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uf3b7mtry.css';
import '../../css/g/glrisgric.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uf3b7mtry"/><path class="glrisgric"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gender-hetero"} {...others} />);
}

export default Component;
