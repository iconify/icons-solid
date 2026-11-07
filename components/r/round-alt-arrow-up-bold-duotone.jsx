import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lloebebob.css';
import '../../css/g/gwm-eyb4t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lloebebob"/><path class="gwm-eyb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-alt-arrow-up-bold-duotone"} {...others} />);
}

export default Component;
