import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aku9edhek.css';
import '../../css/i/il_8vobti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aku9edhek"/><path class="il_8vobti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:chess"} {...others} />);
}

export default Component;
