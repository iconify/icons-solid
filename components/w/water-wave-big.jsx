import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vba-dkb_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vba-dkb_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:water-wave-big"} {...others} />);
}

export default Component;
