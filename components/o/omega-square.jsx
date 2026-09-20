import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z6re8rbyg.css';
import '../../css/n/n5pi0-y4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z6re8rbyg"/><path class="n5pi0-y4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:omega-square"} {...others} />);
}

export default Component;
