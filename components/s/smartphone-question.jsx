import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxxs_hbwr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxxs_hbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:smartphone-question"} {...others} />);
}

export default Component;
