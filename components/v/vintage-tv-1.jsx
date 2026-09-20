import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/ryhuicsqz.css';
import '../../css/n/ngg65hbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ryhuicsqz"/><path class="ngg65hbrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:vintage-tv-1"} {...others} />);
}

export default Component;
