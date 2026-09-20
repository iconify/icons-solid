import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm95fc3hw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gm95fc3hw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:exposure"} {...others} />);
}

export default Component;
