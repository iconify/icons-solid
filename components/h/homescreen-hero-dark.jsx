import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdcvqzrgc.css';
import '../../css/c/ctbyddqaj.css';
import '../../css/h/hiyww-p6x.css';
import '../../css/r/rzyuh294q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zdcvqzrgc"/><path class="ctbyddqaj"/><path class="hiyww-p6x"/><path class="rzyuh294q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homescreen-hero-dark"} {...others} />);
}

export default Component;
