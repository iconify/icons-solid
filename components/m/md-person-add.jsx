import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aaur_9bvy.css';
import '../../css/f/f46yzabqh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aaur_9bvy"/><path class="f46yzabqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-person-add"} {...others} />);
}

export default Component;
