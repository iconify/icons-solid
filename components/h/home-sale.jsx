import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vrrhj9egb.css';
import '../../css/c/c8ypqbc8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vrrhj9egb"/><path class="c8ypqbc8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:home-sale"} {...others} />);
}

export default Component;
