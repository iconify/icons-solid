import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzw309b7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gzw309b7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:mouse-alt-solid"} {...others} />);
}

export default Component;
