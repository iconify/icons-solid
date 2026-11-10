import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htib2p0us.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="htib2p0us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:phi"} {...others} />);
}

export default Component;
