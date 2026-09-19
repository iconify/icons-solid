import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih7o_lvei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ih7o_lvei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:loyalty-card-filled"} {...others} />);
}

export default Component;
