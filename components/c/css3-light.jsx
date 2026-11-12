import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqn4acquj.css';
import '../../css/v/vr6lccbrb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jqn4acquj"/><path class="vr6lccbrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:css3-light"} {...others} />);
}

export default Component;
