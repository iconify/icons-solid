import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nx-ik2vqn.css';
import '../../css/v/v4v2fd20w.css';
import '../../css/z/zs6dehbct.css';
import '../../css/j/j2oc--1ks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nx-ik2vqn"/><path class="v4v2fd20w"/><path class="zs6dehbct"/><path class="j2oc--1ks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:zeppelin"} {...others} />);
}

export default Component;
