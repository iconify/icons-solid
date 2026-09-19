import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qrj6e5hdx.css';
import '../../css/c/cs-7h8fej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qrj6e5hdx"/><path class="cs-7h8fej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:camera"} {...others} />);
}

export default Component;
