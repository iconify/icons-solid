import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh4qecb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary uh4qecb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:corner-inverted-duotone"} {...others} />);
}

export default Component;
