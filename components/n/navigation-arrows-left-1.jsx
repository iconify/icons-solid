import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/twygukbdd.css';
import '../../css/k/kf_oy9bit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="twygukbdd"/><path class="kf_oy9bit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:navigation-arrows-left-1"} {...others} />);
}

export default Component;
