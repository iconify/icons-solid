import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udwqky2ao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udwqky2ao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:school-bus-filled"} {...others} />);
}

export default Component;
