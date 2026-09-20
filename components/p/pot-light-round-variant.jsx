import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njo4stv8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="njo4stv8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:pot-light-round-variant"} {...others} />);
}

export default Component;
