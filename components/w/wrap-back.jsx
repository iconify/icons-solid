import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/h/hsj4o8rgo.css';
import '../../css/l/lkbg2fbgz.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="hsj4o8rgo"/><path class="lkbg2fbgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:wrap-back"} {...others} />);
}

export default Component;
