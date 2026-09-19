import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1c2e6ydi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m1c2e6ydi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:boot"} {...others} />);
}

export default Component;
