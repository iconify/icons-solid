import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u47j3lbwn.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="u47j3lbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mouth-lip-solid"} {...others} />);
}

export default Component;
