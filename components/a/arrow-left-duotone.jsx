import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8_ijmbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary x8_ijmbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-left-duotone"} {...others} />);
}

export default Component;
