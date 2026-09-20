import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fqann9wgm.css';
import '../../css/o/ohlabnb3o.css';
import '../../css/y/yylu5vfhn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fqann9wgm"/><path class="ohlabnb3o"/><path class="yylu5vfhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-synchronize-arrows-loading-load-sync-synchronize-arrow-reload"} {...others} />);
}

export default Component;
