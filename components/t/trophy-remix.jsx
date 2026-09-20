import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6d_7dfxw.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="f6d_7dfxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:trophy-remix"} {...others} />);
}

export default Component;
