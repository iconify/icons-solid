import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0yhc4j3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m0yhc4j3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:app-window-plus"} {...others} />);
}

export default Component;
