import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs_zz3b4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hs_zz3b4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:asterisk"} {...others} />);
}

export default Component;
