import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdxwq8bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdxwq8bbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:square-rounded-outline"} {...others} />);
}

export default Component;
