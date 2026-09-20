import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa1o9kgqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qa1o9kgqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:textformat-color"} {...others} />);
}

export default Component;
