import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rs0c_5blb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rs0c_5blb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-arrow-left-bold"} {...others} />);
}

export default Component;
