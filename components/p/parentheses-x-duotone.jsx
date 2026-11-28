import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz8yk_b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cz8yk_b3a primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:parentheses-x-duotone"} {...others} />);
}

export default Component;
