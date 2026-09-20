import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qu3o-gbgt.css';
import '../../css/h/h4xfh84tu.css';
import '../../css/m/mbaw2jbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qu3o-gbgt"/><path class="h4xfh84tu"/><path class="mbaw2jbyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:fingerprint-minimal"} {...others} />);
}

export default Component;
