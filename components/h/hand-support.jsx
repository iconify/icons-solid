import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqwy0pbrj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jqwy0pbrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:hand-support"} {...others} />);
}

export default Component;
