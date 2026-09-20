import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mwizxcchw.css';
import '../../css/w/wt8wrds2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mwizxcchw"/><rect class="wt8wrds2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:blocks"} {...others} />);
}

export default Component;
