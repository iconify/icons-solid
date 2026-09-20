import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrfi3nquj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wrfi3nquj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:map-pin-x-inside"} {...others} />);
}

export default Component;
