import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6l6zz94l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6l6zz94l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:traffic-light-round"} {...others} />);
}

export default Component;
