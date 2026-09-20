import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy2y370gh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jy2y370gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:scrt"} {...others} />);
}

export default Component;
