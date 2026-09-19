import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd2lkdd-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd2lkdd-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:vertical-bottom-filled"} {...others} />);
}

export default Component;
