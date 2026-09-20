import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cp8pjzr7v.css';
import '../../css/a/a3shu4wez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cp8pjzr7v"/><path class="a3shu4wez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:car-engine-11"} {...others} />);
}

export default Component;
