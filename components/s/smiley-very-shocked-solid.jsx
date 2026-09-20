import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxw-lso_l.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mxw-lso_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:smiley-very-shocked-solid"} {...others} />);
}

export default Component;
