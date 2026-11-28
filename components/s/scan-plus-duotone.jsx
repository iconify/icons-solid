import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq-k3lbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary sq-k3lbnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scan-plus-duotone"} {...others} />);
}

export default Component;
