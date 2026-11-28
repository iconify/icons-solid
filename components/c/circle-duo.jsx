import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp_1auk9l.css';
import '../../css/c/cuj9p20cj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mp_1auk9l secondary"/><path class="cuj9p20cj primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-duo"} {...others} />);
}

export default Component;
