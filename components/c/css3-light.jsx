import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqn4acquj.css';
import '../../css/e/eyi6n2idh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jqn4acquj"/><path class="eyi6n2idh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:css3-light"} {...others} />);
}

export default Component;
