import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg-7l1u1i.css';
import '../../css/f/fua5fmpqt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jg-7l1u1i"/><path class="fua5fmpqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-person-add"} {...others} />);
}

export default Component;
