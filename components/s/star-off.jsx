import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqr-xj2wz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqr-xj2wz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:star-off"} {...others} />);
}

export default Component;
