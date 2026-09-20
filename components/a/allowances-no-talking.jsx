import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k067-5ohl.css';
import '../../css/m/ml3jldfki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k067-5ohl"/><path class="ml3jldfki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:allowances-no-talking"} {...others} />);
}

export default Component;
