import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq7zi4b9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zq7zi4b9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alert-circle"} {...others} />);
}

export default Component;
