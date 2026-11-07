import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/e/eaqdpdd8a.css';
import '../../css/w/w1dl0yq1m.css';
import '../../css/p/pbvw0j5wl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path class="eaqdpdd8a"/><path class="w1dl0yq1m"/><path class="pbvw0j5wl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hamburger-menu-bold-duotone"} {...others} />);
}

export default Component;
