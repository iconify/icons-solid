import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjzu1bbsy.css';
import '../../css/h/hhnaxiuju.css';

const viewBox = {"width":18,"height":24};
const content = `<path class="pjzu1bbsy"/><path class="hhnaxiuju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:prescription"} {...others} />);
}

export default Component;
