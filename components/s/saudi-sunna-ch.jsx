import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kaib1ovzd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kaib1ovzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:saudi-sunna-ch"} {...others} />);
}

export default Component;
