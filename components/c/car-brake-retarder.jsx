import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snt3n6ezt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="snt3n6ezt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:car-brake-retarder"} {...others} />);
}

export default Component;
