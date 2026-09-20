import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4b9-dbik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4b9-dbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:car-brake-parking"} {...others} />);
}

export default Component;
