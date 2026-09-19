import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzvafrbmj.css';

const viewBox = {"width":5,"height":24};
const content = `<path class="zzvafrbmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:more-v"} {...others} />);
}

export default Component;
