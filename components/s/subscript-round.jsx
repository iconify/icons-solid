import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c19_p2b6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c19_p2b6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:subscript-round"} {...others} />);
}

export default Component;
