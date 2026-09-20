import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vun63ebyc.css';
import '../../css/x/xen266bam.css';
import '../../css/q/qizjjcbeq.css';
import '../../css/g/gxu01hd-s.css';

const viewBox = {"width":32,"height":32};
const content = `<defs><linearGradient id="SVGVKMUzeSb" x1="27.349" x2="7.613" y1="26.455" y2="6.719" gradientTransform="matrix(1 0 0 -1 0 34)" gradientUnits="userSpaceOnUse"><stop offset=".15" class="vun63ebyc"/><stop offset=".85" class="xen266bam"/></linearGradient></defs><path class="qizjjcbeq"/><path fill="url(#SVGVKMUzeSb)" class="gxu01hd-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:turborepo"} {...others} />);
}

export default Component;
