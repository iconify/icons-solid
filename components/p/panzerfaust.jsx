import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eofb2ccfy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eofb2ccfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:panzerfaust"} {...others} />);
}

export default Component;
