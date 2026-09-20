import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjr9i_a7v.css';
import '../../css/p/pz9kr7bph.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="jjr9i_a7v"/><path class="pz9kr7bph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:siri-frame-line"} {...others} />);
}

export default Component;
