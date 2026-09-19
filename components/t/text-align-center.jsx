import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3gahbc6k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p3gahbc6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:text-align-center"} {...others} />);
}

export default Component;
