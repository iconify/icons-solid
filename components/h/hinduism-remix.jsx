import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2q2b_7gn.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="i2q2b_7gn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hinduism-remix"} {...others} />);
}

export default Component;
