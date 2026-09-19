import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhwmhibnh.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/h/h39chhikd.css';
import '../../css/y/y_yz0v5co.css';
import '../../css/k/kqwpw6bwg.css';
import '../../css/v/v7e_sdbun.css';
import '../../css/s/slb8l6bup.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGPypRneoz"><path class="qhwmhibnh"/></clipPath></defs><g clip-path="url(#SVGPypRneoz)" transform="translate(-117.8)scale(1.0375)"><g class="nv9qcacyl"><path class="h39chhikd"/><path class="y_yz0v5co"/><path class="kqwpw6bwg"/><path class="v7e_sdbun"/><path class="slb8l6bup"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:jo-1x1"} {...others} />);
}

export default Component;
