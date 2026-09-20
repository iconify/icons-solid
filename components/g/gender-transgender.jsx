import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et2c2sm_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="et2c2sm_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gender-transgender"} {...others} />);
}

export default Component;
