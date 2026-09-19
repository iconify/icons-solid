import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umx1nx15r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="umx1nx15r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:octopus-filled"} {...others} />);
}

export default Component;
