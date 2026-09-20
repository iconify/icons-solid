import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4d04xblq.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};
const content = `<path class="v4d04xblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:google-play"} {...others} />);
}

export default Component;
