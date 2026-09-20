import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-rd-o6my.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b-rd-o6my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bug-stop"} {...others} />);
}

export default Component;
