import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w65ko2ctp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w65ko2ctp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:braces-solid"} {...others} />);
}

export default Component;
