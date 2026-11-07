import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw5g050oe.css';
import '../../css/w/w19abnbit.css';
import '../../css/t/tsguwswfn.css';
import '../../css/a/ae2knfujf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hw5g050oe"/><path class="w19abnbit"/><path class="tsguwswfn"/><path class="ae2knfujf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:help-bold"} {...others} />);
}

export default Component;
