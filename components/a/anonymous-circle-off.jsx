import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek6t0acuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ek6t0acuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:anonymous-circle-off"} {...others} />);
}

export default Component;
