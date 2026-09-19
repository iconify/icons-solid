import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2998v2us.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p2998v2us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:seat"} {...others} />);
}

export default Component;
