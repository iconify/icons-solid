import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euezyny1x.css';
import '../../css/s/sci2_fjrw.css';
import '../../css/z/z0d5_ibur.css';
import '../../css/n/n3v73wb7o.css';
import '../../css/s/sq1tfvhki.css';

const viewBox = {"width":256,"height":256};
const content = `<defs><linearGradient id="SVGSYAajeNN" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" class="euezyny1x"/><stop offset="100%" class="sci2_fjrw"/></linearGradient></defs><circle class="z0d5_ibur"/><path fill="url(#SVGSYAajeNN)" class="n3v73wb7o"/><path fill="url(#SVGSYAajeNN)" transform="matrix(-1 0 0 1 140.5 0)" class="sq1tfvhki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tor"} {...others} />);
}

export default Component;
