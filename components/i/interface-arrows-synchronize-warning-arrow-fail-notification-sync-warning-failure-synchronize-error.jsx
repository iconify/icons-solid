import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fqann9wgm.css';
import '../../css/l/lxbmhf4sm.css';
import '../../css/m/m96sjcbvr.css';
import '../../css/i/i5sj4ifpi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fqann9wgm"/><path class="lxbmhf4sm"/><path class="m96sjcbvr"/><circle class="i5sj4ifpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-synchronize-warning-arrow-fail-notification-sync-warning-failure-synchronize-error"} {...others} />);
}

export default Component;
