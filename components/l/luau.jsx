import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c13o2wbqp.css';
import '../../css/t/tnle1tu0a.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c13o2wbqp"/><path class="tnle1tu0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:luau"} {...others} />);
}

export default Component;
