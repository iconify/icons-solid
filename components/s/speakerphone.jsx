import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4hnn6fqm.css';
import '../../css/i/i5cu0abur.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z4hnn6fqm"/><path class="i5cu0abur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:speakerphone"} {...others} />);
}

export default Component;
