import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua7k72yme.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary ua7k72yme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:snowflake-duotone"} {...others} />);
}

export default Component;
