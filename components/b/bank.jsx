import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gq9eq8bmb.css';
import '../../css/q/qirye3bju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="gq9eq8bmb"/><path class="qirye3bju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bank"} {...others} />);
}

export default Component;
