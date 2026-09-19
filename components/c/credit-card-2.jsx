import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqzj6bc5o.css';
import '../../css/g/gyn51--bg.css';
import '../../css/s/saie_4g2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqzj6bc5o"/><path class="gyn51--bg"/><rect transform="rotate(-90 17.434 9.14)" class="saie_4g2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:credit-card-2"} {...others} />);
}

export default Component;
