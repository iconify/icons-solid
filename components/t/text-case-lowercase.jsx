import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyyrubtqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tyyrubtqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-case-lowercase"} {...others} />);
}

export default Component;
