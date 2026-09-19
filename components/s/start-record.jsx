import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca7z5h1rz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ca7z5h1rz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:start-record"} {...others} />);
}

export default Component;
