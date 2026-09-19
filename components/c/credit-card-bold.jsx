import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayn4fno-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ayn4fno-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:credit-card-bold"} {...others} />);
}

export default Component;
