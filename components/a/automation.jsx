import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fih1jvc2u.css';
import '../../css/l/lgevicgqz.css';
import '../../css/y/ysv--kbzy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fih1jvc2u"/><path class="lgevicgqz"/><path class="ysv--kbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:automation"} {...others} />);
}

export default Component;
