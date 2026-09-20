import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slq3vpbfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="slq3vpbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:location-minus-filled"} {...others} />);
}

export default Component;
