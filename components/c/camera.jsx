import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gkzoq9u2i.css';
import '../../css/h/hf3x9qqco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gkzoq9u2i"/><path class="hf3x9qqco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:camera"} {...others} />);
}

export default Component;
