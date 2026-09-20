import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kij9krb8y.css';
import '../../css/p/pt5dtcbku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kij9krb8y"/><path class="pt5dtcbku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:droplet"} {...others} />);
}

export default Component;
