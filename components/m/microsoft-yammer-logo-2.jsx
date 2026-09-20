import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s-aky6bid.css';
import '../../css/u/u1g9icbuz.css';
import '../../css/p/pbt-4o-ij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="s-aky6bid"/><path class="u1g9icbuz"/><path class="pbt-4o-ij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:microsoft-yammer-logo-2"} {...others} />);
}

export default Component;
