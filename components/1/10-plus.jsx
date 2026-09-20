import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txvyr0b6k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txvyr0b6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:10-plus"} {...others} />);
}

export default Component;
