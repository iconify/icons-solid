import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtb2k4dkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtb2k4dkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:pail-outline"} {...others} />);
}

export default Component;
