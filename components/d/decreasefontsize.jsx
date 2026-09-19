import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2cnbnb2l.css';
import '../../css/z/zbeas57fc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y2cnbnb2l"/><path class="zbeas57fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:decreasefontsize"} {...others} />);
}

export default Component;
