import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqw90dbua.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oqw90dbua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:square-arrow-right-filled"} {...others} />);
}

export default Component;
