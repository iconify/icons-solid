import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx6sh1ufv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary qx6sh1ufv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:variable-duotone"} {...others} />);
}

export default Component;
