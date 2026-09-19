import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_18osnpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t_18osnpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:deutschlandfunk"} {...others} />);
}

export default Component;
