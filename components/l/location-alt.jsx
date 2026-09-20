import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qxi2itnap.css';
import '../../css/x/xe15rybqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qxi2itnap"/><path class="xe15rybqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:location-alt"} {...others} />);
}

export default Component;
