import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sng-n9b1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sng-n9b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-plus-minus-duotone"} {...others} />);
}

export default Component;
