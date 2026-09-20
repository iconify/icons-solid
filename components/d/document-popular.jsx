import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cej47kqnc.css';
import '../../css/r/rdfge7bju.css';
import '../../css/c/cln8p0noc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cej47kqnc"/><path class="rdfge7bju"/><path class="cln8p0noc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:document-popular"} {...others} />);
}

export default Component;
