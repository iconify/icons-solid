import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm-aqybfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sm-aqybfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:shenzhen-metro"} {...others} />);
}

export default Component;
