import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_e3yyfss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary w_e3yyfss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:union-duotone"} {...others} />);
}

export default Component;
