import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylnr7y52n.css';
import '../../css/h/hs-lm0b_y.css';

const viewBox = {"width":26,"height":26};
const content = `<circle class="ylnr7y52n"/><path class="hs-lm0b_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:play-26"} {...others} />);
}

export default Component;
