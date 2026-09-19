import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2e32hbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2e32hbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:twitter-solid"} {...others} />);
}

export default Component;
